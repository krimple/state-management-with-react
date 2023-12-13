import StocksView from './stocks/StocksView';
import BondsView from './bonds/BondsView';
import Card from '../../components/Card.tsx';
import CashView from './cash/CashView.tsx';

export default function FinancialAssets() {

  return (
    <>
      <Card title="Stocks"><StocksView /></Card>
      <Card title="Bonds"><BondsView /></Card>
      <Card title="Cash"><CashView /></Card>
    </>
  )
}
