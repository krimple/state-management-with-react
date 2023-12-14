import StocksView from "./stocks/StocksView";
import BondsView from "./bonds/BondsView";
import Card from "../../components/Card.tsx";
import CashView from "./cash/CashView.tsx";
import { Suspense } from "react";

export default function FinancialAssets() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Card title="Stocks">
        <StocksView />
      </Card>
      <Card title="Bonds">
        <BondsView />
      </Card>
      <Card title="Cash">
        <CashView />
      </Card>
    </Suspense>
  );
}
