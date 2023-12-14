import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { BondAsset } from "../../../types";

export const fetchBonds = createAsyncThunk("bonds/getAll", async () => {
  const response = await fetch("/api/bonds");
  if (response.ok) {
    return (await response.json()) as BondAsset[];
  }
  throw new Error(`Fetch error. ${response.status} - ${response.statusText}`);
});

export const updateBond = createAsyncThunk(
  "bonds/updateBond",
  async (bond: BondAsset, thunkAPI) => {
    const updateResponse = await fetch(`/api/bonds/${bond.id}`, {
      headers: {
        "Content-Type": "application/json`",
      },
      method: "PUT",
      body: JSON.stringify(bond),
    });
    if (!updateResponse.ok) {
      thunkAPI.abort(
        `Bond ${bond.id} cannot be updated. ${updateResponse.status} - ${updateResponse.statusText}`,
      );
    }

    // now, refresh the datasource - the data may have changed out from under us!
    const refreshResponse = await fetch("/api/bonds", {
      headers: {
        Accepts: "application/json",
      },
      method: "GET",
    });
    if (refreshResponse.ok) {
      return (await refreshResponse.json()) as BondAsset[];
    }
  },
);
export const bondsReducer = createReducer<BondAsset[]>([], (builder) => {
  builder.addCase(fetchBonds.fulfilled, (_, action) => {
    return action.payload;
  });
  builder.addCase(fetchBonds.rejected, (_) => {
    return [];
  });
  builder.addCase(updateBond.fulfilled, (_, action) => {
    return action.payload;
  });
});
