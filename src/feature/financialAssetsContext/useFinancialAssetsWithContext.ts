import { createContext, useContext } from 'react';
import { BondAssetType, CashAssetType, StockAssetType } from '../../types';

export type FinancialAssetsContextType = {
  stocks: StockAssetType[],
  bonds: BondAssetType[],
  cash: CashAssetType[]
};

// Note: we have to provide a default for the Context value, but it will be ignored by
// the provider when we mount it with a value. This default is to avoid having a type | undefined
// for TypeScript and forcing optional checks when accessing the context data.
export const seedFinancialAssets : FinancialAssetsContextType = {
  stocks: [
  ],
  bonds: [
  ],
  cash: [
  ]
};

// the actual state will be held here

export const FinancialAssetsContext = createContext<FinancialAssetsContextType>(seedFinancialAssets);

export const FinancialAssetsContextProvider = FinancialAssetsContext.Provider;

export function useFinancialAssetsWithContext() {
  const faContext = useContext(FinancialAssetsContext);
  if (!faContext) {
    throw new Error("Not using the Financial Assets Context within a provider.");
  }
  return faContext;
}
