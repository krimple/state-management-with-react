import CashView from './cash/CashView';
import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import { useEffect } from 'react';
import { doLoadData, FinancialAssetsState } from './financial-assets-reducer.ts';
import {
  useFinancialAssetsContext
} from './useFinancialAssetsContextWithReducer.ts';
import Card from '../../components/Card.tsx';
import { BondAsset, CashAsset, FinancialAssetType, StockAsset } from '../../types';

export default function FinancialAssets() {
  const { dispatch} = useFinancialAssetsContext();

  // TODO - extract out of component into action creator ala Redux
  useEffect(() => {
    (async () => {
      await doLoadData(dispatch);
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
