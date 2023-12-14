import {
  FinancialAssetsContext,
  seedFinancialAssets,
} from "./useFinancialAssetsContextWithReducer";
import { Suspense, useReducer } from "react";
import FinancialAssets from "./FinancialAssets";
import financialAssetsReducer from "./financial-assets-reducer";

export default function FinancialAssetsContextWithReducer() {
  // note - suspense is useless here, added to show how it cannot detect actions tripped by
  // an useEffect
  const [state, dispatch] = useReducer(
    financialAssetsReducer,
    seedFinancialAssets,
  );
  return (
    <Suspense fallback={<p>This message will never display...</p>}>
      <FinancialAssetsContext.Provider value={{ state, dispatch }}>
        <FinancialAssets />
      </FinancialAssetsContext.Provider>
    </Suspense>
  );
}
