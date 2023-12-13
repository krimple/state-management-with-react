import CashView from './cash/CashView';
import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import { useEffect } from 'react';
import { doLoadData } from './financial-assets-reducer.ts';
import {
  useFinancialAssetsContext
} from './useFinancialAssetsContextWithReducer.ts';
import Card from '../../components/Card.tsx';

export default function FinancialAssets() {
  const { dispatch} = useFinancialAssetsContext();

  // NOTE: though we've included the Suspense component in the outer component,
  // it will not work, because useEffect isn't detected as a datasource.
  // https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading
  useEffect(() => {
    (async () => {
      await doLoadData(dispatch);
    })();
  }, [dispatch]);

  return (
    <>
      <h3>Using Context + React Reducer</h3>
      <Card title="Stocks"><StocksView /></Card>
      <Card title="Bonds"><BondsView /></Card>
      <Card title="Cash"><CashView /></Card>
    </>
  );
}
