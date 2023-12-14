import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { CashAsset } from "../../../types";

export const fetchCash = createAsyncThunk("cash/getAll", async () => {
  const response = await fetch("/api/cash");
  if (response.ok) {
    return (await response.json()) as CashAsset[];
  }
  throw new Error(`Fetch error. ${response.status} - ${response.statusText}`);
});

export const updateCash = createAsyncThunk(
  "cash/updateCash",
  async (cashAsset: CashAsset, thunkAPI) => {
    const updateResponse = await fetch(`/api/cash/${cashAsset.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(cashAsset),
    });
    if (!updateResponse.ok) {
      thunkAPI.abort(
        `Cash Account ${cashAsset.id} cannot be updated. ${updateResponse.status} - ${updateResponse.statusText}`,
      );
    }

    // now, refresh the datasource - the data may have changed out from under us!
    const refreshResponse = await fetch("/api/cash", {
      headers: {
        Accepts: "application/json",
      },
      method: "GET",
    });
    if (refreshResponse.ok) {
      return (await refreshResponse.json()) as CashAsset[];
    }
  },
);
export const cashReducer = createReducer<CashAsset[]>([], (builder) => {
  builder.addCase(fetchCash.fulfilled, (_, action) => {
    return action.payload;
  });
  builder.addCase(fetchCash.rejected, (_) => {
    return [];
  });

  builder.addCase(updateCash.fulfilled, (_, action) => {
    return action.payload;
  });
});
