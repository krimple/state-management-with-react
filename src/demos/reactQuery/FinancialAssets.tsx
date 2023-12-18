import { Suspense } from 'react';
import Card from '../../components/Card';
import BondAssetsView from './bonds/BondAssetsView';
import CashAccountsView from './cash/CashAccountsView';
import StocksView from './stocks/StocksView';

export default function FinancialAssets() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Card title="Stocks">
                <StocksView />
            </Card>
            <Card title="Bonds">
                <BondAssetsView />
            </Card>
            <Card title="CashAccountView">
                <CashAccountsView />
            </Card>
        </Suspense>
    );
}
