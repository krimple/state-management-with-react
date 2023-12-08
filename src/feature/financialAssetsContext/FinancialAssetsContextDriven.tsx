import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import CashView from './cash/CashView';
import {FinancialAssetsContextProvider} from './useFinancialAssetsWithContext';
import { useEffect, useState } from 'react';
import { FinancialAssetType } from '../../types';
import { getAssets } from '../../apis';
import Card from '../../components/Card.tsx';

export default function FinancialAssetsContextDriven () {
  const [assets, setAssets] = useState<FinancialAssetType[]|null>(null);
  useEffect(() => {
    (async() => {
      setAssets(await getAssets());
    })();
  }, []);

  // if we don't have 'em...
  if (!assets) {
    return <p>Loading...</p>
  }
  return (
    <FinancialAssetsContextProvider value={assets}>
      <Card title="Stocks"><StocksView /></Card>
      <Card title="Bonds"><BondsView /></Card>
      <Card title="Cash"><CashView /></Card>
  </FinancialAssetsContextProvider>
  );
}
