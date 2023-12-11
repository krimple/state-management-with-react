// import CashView from './cash/CashView';
import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import Card from '../../components/Card.tsx';
import CashView from './cash/CashView.tsx';
import { useEffect } from 'react';
import { fetchCash } from './cash/cash-slice.ts';
import { fetchBonds } from './bonds/bonds-slice.ts';
import { fetchStocks } from './stocks/stocks-slice.ts';
import { useAppDispatch } from './store/hooks.ts';

export default function FinancialAssets() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    // trip load of all reducer data
    dispatch(fetchCash());
    dispatch(fetchBonds());
    dispatch(fetchStocks());
  }, []);

  return (
    <>
      <Card title="Stocks"><StocksView /></Card>
      <Card title="Bonds"><BondsView /></Card>
      <Card title="Cash"><CashView /></Card>
    </>
  )
}
