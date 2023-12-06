import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import CashView from './cash/CashView';
import {FinancialAssetsContextProvider} from './useFinancialAssetsWithContext.ts';
import { useEffect, useState } from 'react';
import { FinancialAssetsState } from '../financialAssetsContextWithReducer/financial-assets-reducer.ts';

export default function FinancialAssetsContextDriven () {

  const [assets, setAssets] = useState<FinancialAssetsState|null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/assets');
      if (response.ok) {
        setAssets(await response.json() as FinancialAssetsState);
      }
    })();
  }, []);

  // if we don't have 'em...
  if (!assets) {
    return <p>Loading...</p>
  }
  return (
    <FinancialAssetsContextProvider value={assets}>
    <StocksView />
    <BondsView />
    <CashView />
  </FinancialAssetsContextProvider>
  );
}
