import { Suspense } from 'react';
import Card from '../../components/Card';
import { FinancialAssetsContextProvider } from './FinancialAssetsContextProvider';
import BondAssetsView from './bonds/BondAssetsView';
import CashAccountsView from './cash/CashAccountsView';
import StockAssetsView from './stocks/StockAssetsView';

export default function FinancialAssetsContextDriven() {
    return (
        <Suspense fallback={<p>Loading context demo...</p>}>
            <FinancialAssetsContextProvider>
                <h3>Using React Context</h3>
                <Card title="Stocks">
                    <StockAssetsView />
                </Card>
                <Card title="Bonds">
                    <BondAssetsView />
                </Card>
                <Card title="Cash">
                    <CashAccountsView />
                </Card>
            </FinancialAssetsContextProvider>
        </Suspense>
    );
}
