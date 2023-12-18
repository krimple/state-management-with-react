// import CashAccountsView from './cash/CashAccountsView';
import { Suspense, useEffect } from 'react';
import Card from '../../components/Card';
import BondAssetsView from './bonds/BondAssetsView.tsx';
import { fetchBonds } from './bonds/bonds-slice';
import CashAccountsView from './cash/CashAccountsView.tsx';
import { fetchCash } from './cash/cash-slice';
import StockAssetsView from './stocks/StockAssetsView.tsx';
import { fetchStocks } from './stocks/stocks-slice';
import { useAppDispatch } from './store/hooks';

export default function FinancialAssets() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // trip load of all reducer data
        dispatch(fetchCash());
        dispatch(fetchBonds());
        dispatch(fetchStocks());
    }, [dispatch]);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <h3>Using Redux with Redux Toolkit</h3>
            <Card title="Stocks">
                <StockAssetsView />
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
