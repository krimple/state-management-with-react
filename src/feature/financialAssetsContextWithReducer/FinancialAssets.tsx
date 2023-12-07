import CashView from './cash/CashView';
import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import { useEffect } from 'react';
import { FinancialAssetsState } from './financial-assets-reducer.ts';
import {
  useFinancialAssetsContext
} from './useFinancialAssetsContextWithReducer.ts';
import Card from '../../components/Card.tsx';

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
      <Card title="Stocks"><StocksView /></Card>
      <Card title="Bonds"><BondsView /></Card>
      <Card title="Cash"><CashView /></Card>
    </>
  )
}
