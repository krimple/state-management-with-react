import { Context, createContext, useContext, useState } from 'react';

export type StockAssetType = {
  ticker: string;
  basisCost: number;
  description: string;
};

export type BondAssetType = {
  issuingAgency: string;
  bondSeries: string;
  initialValue: number;
  targetValue: number;
  maturityInMonths: number;
};

export type CashAssetType = {
  accountType: string;
  accountNumber: string;
  value: number;
};

export type FinancialAssetsContextType = {
  stocks: StockAssetType[],
  bonds: BondAssetType[],
  cash: CashAssetType[]
};

export const seedFinancialAssets : FinancialAssetsContextType = {
  stocks: [
  ],
  bonds: [
  ],
  cash: [
  ]
};

const [financialAssetData, setFinancialAssetsData] = useState<FinancialAssetsContextType>(seedFinancialAssets);

export const FinancialAssetsContext =
  createContext<FinancialAssetsContextType>(financialAssetData);

export const FinancialAssetsContextProvider = FinancialAssetsContext.Provider;

export function useFinancialAssets(context: Context<FinancialAssetsContextType>) {
  const faContext = useContext<FinancialAssetsContextType>(context);
  if (!faContext) {
    throw new Error("Not using the Financial Assets Context within a provider.");
  }
  return faContext;
}

export async function loadFinancialAssets() {
  const response = await fetch('/api/assets');
  if (response.ok) {
   const jsonData = await response.json();
   setFinancialAssetsData(jsonData);
   return;
  }
  console.error(response);
  throw new Error('Invalid response to API request for assets');
}
