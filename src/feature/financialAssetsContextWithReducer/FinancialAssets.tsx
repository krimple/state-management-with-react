import CashView from '../financialAssetsContext/cash/CashView';
import StocksView from '../financialAssetsContext/stocks/StocksView';
import BondsView from '../financialAssetsContext/bonds/BondsView';
import { useEffect } from 'react';
import { FinancialAssetsState } from './financial-assets-reducer.ts';
import {
  useFinancialAssetsContext
} from './useFinancialAssetsContextWithReducer.ts';

export default function FinancialAssets() {
  const { dispatch} = useFinancialAssetsContext();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/assets');
      if (response.ok) {
        const data = await response.json() as FinancialAssetsState;
        dispatch({type: 'LOAD_DATA', payload: data});
      }
    })();
  }, [dispatch]);

  return (
    <>
      <StocksView />
      <BondsView />
      <CashView />
    </>
  )
}
