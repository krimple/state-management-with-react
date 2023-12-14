import { BondAsset, CashAsset, FinancialAssetType, StockAsset } from "../types";

export async function getAssets() {
  const responses = await Promise.all([
    fetch("/api/cash"),
    fetch("/api/bonds"),
    fetch("/api/stocks"),
  ]);
  if (responses.find((r) => !r.ok)) {
    throw new Error("Failed response. Check logs.");
  }
  const jsonResults = await Promise.all<[any, any, any]>([
    responses[0].json(),
    responses[1].json(),
    responses[2].json(),
  ]);
  return jsonResults.flat() as FinancialAssetType[];
}

export async function getCash() {
  const response = await fetch("/api/cash");
  if (response.ok) {
    return (await response.json()) as CashAsset[];
  }
  throw new Error(`Network error. ${response.status} = ${response.statusText}`);
}

export async function getStocks() {
  const response = await fetch("/api/stocks");
  if (response.ok) {
    return (await response.json()) as StockAsset[];
  }
  throw new Error(`Network error. ${response.status} = ${response.statusText}`);
}

export async function getBonds() {
  const response = await fetch("/api/bonds");
  if (response.ok) {
    return (await response.json()) as BondAsset[];
  }
  throw new Error(`Network error. ${response.status} = ${response.statusText}`);
}
