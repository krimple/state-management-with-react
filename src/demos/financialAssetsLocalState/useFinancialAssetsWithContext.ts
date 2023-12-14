import { createContext, useContext } from "react";
import { FinancialAssetType } from "../../types";

// Note: we have to provide a default for the Context value, but it will be ignored by
// the provider when we mount it with a value. This default is to avoid having a type | undefined
// for TypeScript and forcing optional checks when accessing the context data.
export const seedFinancialAssets: FinancialAssetType[] = [];

// the actual state will be held here

export const FinancialAssetsContext =
  createContext<FinancialAssetType[]>(seedFinancialAssets);

export const FinancialAssetsContextProvider = FinancialAssetsContext.Provider;

export function useFinancialAssetsWithContext() {
  const faContext = useContext(FinancialAssetsContext);
  if (!faContext) {
    throw new Error(
      "Not using the Financial Assets Context within a provider.",
    );
  }
  return faContext;
}
