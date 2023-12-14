import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { StockAsset } from "../../../types";

export const fetchStocks = createAsyncThunk("stocks/getAll", async () => {
  const response = await fetch("/api/stocks");
  if (response.ok) {
    return (await response.json()) as StockAsset[];
  }
  throw new Error(`Fetch error. ${response.status} - ${response.statusText}`);
});

export const updateStock = createAsyncThunk(
  "bonds/updateStock",
  async (stockAsset: StockAsset, thunkAPI) => {
    const updateResponse = await fetch(`/api/stocks/${stockAsset.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(stockAsset),
    });
    if (!updateResponse.ok) {
      thunkAPI.abort(
        `Stock ${stockAsset.id} cannot be updated. ${updateResponse.status} - ${updateResponse.statusText}`,
      );
    }

    // now, refresh the datasource - the data may have changed out from under us!
    const refreshResponse = await fetch("/api/stocks", {
      headers: {
        Accepts: "application/json",
      },
      method: "GET",
    });
    if (refreshResponse.ok) {
      return (await refreshResponse.json()) as StockAsset[];
    }
  },
);

export const stocksReducer = createReducer<StockAsset[]>([], (builder) => {
  builder.addCase(fetchStocks.fulfilled, (_, action) => {
    return action.payload;
  });
  builder.addCase(fetchStocks.rejected, (_) => {
    return [];
  });
  builder.addCase(updateStock.fulfilled, (_, action) => {
    return action.payload;
  });
});
