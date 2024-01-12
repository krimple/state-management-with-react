import { Suspense, useEffect, useState } from 'react';
import { getAssets } from '../../apis';
import Card from '../../components/Card';
import { CombinedFinancialAssetsStateType } from '../../types';
import FinancialAssetsContext from './FinancialAssetsContext';
import BondAssetsView from './bonds/BondAssetsView';
import CashAccountsView from './cash/CashAccountsView';
import StockAssetsView from './stocks/StockAssetsView';

export default function FinancialAssetsContextDriven() {
    const [assets, setAssets] = useState<CombinedFinancialAssetsStateType>({
        bonds: [],
        cash: [],
        stocks: [],
    });

    const fetchAssets = async () => {
        try {
            setAssets(await getAssets());
        } catch (e) {
            throw new Error('fetch failed');
        }
    };

    useEffect(() => {
        (async () => {
            await fetchAssets();
        })();
    }, []);

    return (
        <Suspense fallback={<p>Loading context demo...</p>}>
            <FinancialAssetsContext.Provider value={{ assets, fetchAssets }}>
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
            </FinancialAssetsContext.Provider>
        </Suspense>
    );
}
