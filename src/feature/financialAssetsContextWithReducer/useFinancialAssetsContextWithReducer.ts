import { createContext, Dispatch, useContext } from 'react';
import type {FinancialAssetsState, Actions} from './financial-assets-reducer.ts'

// Note: we have to provide a default for the Context value, but it will be ignored by
// the provider when we mount it with a value. This default is to avoid having a type | undefined
// for TypeScript and forcing optional checks when accessing the context data.
export const seedFinancialAssets : FinancialAssetsState = {
  stocks: [
  ],
  bonds: [
  ],
  cash: [
  ]
};

// the actual state and dispatch represented by a reducer
export const FinancialAssetsContext =
  createContext<{
    state: FinancialAssetsState;
    dispatch: Dispatch<Actions>;
  }>({state: seedFinancialAssets, dispatch: () => undefined});

export const useFinancialAssetsContext = () => {
  const context = useContext(FinancialAssetsContext);
  if (!context) {
    throw new Error('Financial Assets Reducer not mounted in a context.');
  }
  return context;
}

