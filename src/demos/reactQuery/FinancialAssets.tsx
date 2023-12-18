import { Suspense } from 'react';
import Card from '../../components/Card';
import BondsView from './bonds/BondsView';
import CashView from './cash/CashView';
import StocksView from './stocks/StocksView';

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
