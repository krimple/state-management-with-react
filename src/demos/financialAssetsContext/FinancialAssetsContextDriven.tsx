import { Suspense, useEffect, useState } from 'react';
import { getBonds, getCash, getStocks } from '../../apis';

import Card from '../../components/Card';
import FinancialAssetsContext from './FinancialAssetsContext';
import { FinancialAssetsStateType } from './FinancialAssetsContextType';
import BondAssetsView from './bonds/BondAssetsView';
import CashAccountsView from './cash/CashAccountsView';
import StockAssetsView from './stocks/StockAssetsView';

export default function FinancialAssetsContextDriven() {
    const [assets, setAssets] = useState<FinancialAssetsStateType>({
        bonds: [],
        cash: [],
        stocks: [],
    });

    const fetchAssets = async () => {
        try {
            const stocksData = await getStocks();
            const bondsData = await getBonds();
            const cashData = await getCash();
            setAssets({ stocks: stocksData, bonds: bondsData, cash: cashData });
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
                {/*<h3>Using React Context</h3>*/}
                <Card title="Stocks">
                    <StockAssetsView />
                </Card>
                <Card title="Bonds">
                    <BondAssetsView />
                </Card>
                <Card title="CashAccountView">
                    <CashAccountsView />
                </Card>
            </FinancialAssetsContext.Provider>
        </Suspense>
    );
}
