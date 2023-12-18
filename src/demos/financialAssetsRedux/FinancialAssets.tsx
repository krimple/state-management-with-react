// import CashView from './cash/CashView';
import { Suspense, useEffect } from 'react';
import Card from '../../components/Card';
import BondsView from './bonds/BondsView';
import { fetchBonds } from './bonds/bonds-slice';
import CashView from './cash/CashView';
import { fetchCash } from './cash/cash-slice';
import StocksView from './stocks/StocksView';
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
                <StocksView />
            </Card>
            <Card title="Bonds">
                <BondsView />
            </Card>
            <Card title="CashAccountView">
                <CashView />
            </Card>
        </Suspense>
    );
}
