import { Suspense, useEffect, useState } from 'react';
import { getAssets } from '../../apis';
import Card from '../../components/Card';
import { FinancialAssetType } from '../../types';
import BondsView from './bonds/BondsView';
import CashView from './cash/CashView';
import StocksView from './stocks/StocksView';
import { FinancialAssetsContextProvider } from './useFinancialAssetsWithContext';

export default function FinancialAssetsContextDriven() {
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
        <Suspense fallback={<p>Loading context demo...</p>}>
            <FinancialAssetsContextProvider value={assets}>
                <h3>Using React Context</h3>
                <Card title="Stocks">
                    <StocksView />
                </Card>
                <Card title="Bonds">
                    <BondsView />
                </Card>
                <Card title="Cash">
                    <CashView />
                </Card>
            </FinancialAssetsContextProvider>
        </Suspense>
    );
}
