import { useEffect, useState } from 'react';
import { getAssets } from '../../apis';
import Card from '../../components/Card';
import { FinancialAssetType } from '../../types';
import BondAssetsView from './bonds/BondAssetsView';
import CashView from './cash/CashAccountsView';
import StocksView from './stocks/StockAssetsView';

export default function FinancialAssetsLocalState() {
    const [assets, setAssets] = useState<FinancialAssetType[] | null>(null);
    useEffect(() => {
        (async () => {
            setAssets(await getAssets());
        })();
    }, []);

    // if we don't have 'em...
    if (!assets) {
        return <p>Loading...</p>;
    }
    return (
        <section className="card">
            <h3>Local (component-level) State Demo</h3>
            <Card title="Stocks">
                <StocksView />
            </Card>
            <Card title="Bonds">
                <BondAssetsView />
            </Card>
            <Card title="CashAccountView">
                <CashView />
            </Card>
        </section>
    );
}
