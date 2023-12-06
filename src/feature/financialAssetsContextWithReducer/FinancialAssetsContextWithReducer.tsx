import {
  FinancialAssetsContext, seedFinancialAssets
} from './useFinancialAssetsContextWithReducer.ts';
import { useReducer } from 'react';
import FinancialAssets from './FinancialAssets.tsx';
import financialAssetsReducer from './financial-assets-reducer.ts';

export default function FinancialAssetsContextWithReducer () {

  const [state, dispatch] = useReducer(financialAssetsReducer, seedFinancialAssets);
  // if we don't have 'em...
  return (
    <FinancialAssetsContext.Provider value={{state, dispatch}}>
       <FinancialAssets />
    </FinancialAssetsContext.Provider>
  );
}
