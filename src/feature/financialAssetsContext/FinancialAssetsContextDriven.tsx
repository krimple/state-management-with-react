import StocksView from './stocks/StocksView.tsx';
import BondsView from './bonds/BondsView.tsx';
import CashView from './cash/CashView.tsx';
import {FinancialAssetsContextProvider, seedFinancialAssets, loadFinancialAssets} from './useFinancialAssets.tsx';
import { useEffect } from 'react';

export default function FinancialAssetsContextDriven () {

  useEffect(() => {
    (async () => {
      await loadFinancialAssets();
    })();
  }, []);

  // if we don't have 'em...
  return (
    <FinancialAssetsContextProvider value={seedFinancialAssets}>
    <StocksView />
    <BondsView />
    <CashView />
  </FinancialAssetsContextProvider>
  );
}
