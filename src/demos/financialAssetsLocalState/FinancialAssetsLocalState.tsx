import Card from '@/components/Card';
import BondAssetsView from './bonds/BondAssetsView';
import CashAccountsView from './cash/CashAccountsView';
import StockAssetsView from './stocks/StockAssetsView';

export default function FinancialAssetsLocalState() {
    return (
        <div>
            <h3>Local (component-level) State Demo</h3>
            <Card title="Stocks">
                <StockAssetsView />
            </Card>
            <Card title="Bonds">
                <BondAssetsView />
            </Card>
            <Card title="Cash">
                <CashAccountsView />
            </Card>
        </div>
    );
}
