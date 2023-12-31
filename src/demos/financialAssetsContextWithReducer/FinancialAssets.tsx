import { useEffect } from 'react';
import Card from '../../components/Card';
import BondsView from './bonds/BondsView';
import CashAccountsView from './cash/CashAccountsView';
import { doLoadData } from './financial-assets-reducer';
import StockAssetsView from './stocks/StockAssetsView';
import { useFinancialAssetsContext } from './useFinancialAssetsContextWithReducer';

export default function FinancialAssets() {
    const { dispatch } = useFinancialAssetsContext();

    // NOTE: though we've included the Suspense component in the outer component,
    // it will not work, because useEffect isn't detected as a datasource.
    // https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading
    useEffect(() => {
        (async () => {
            await doLoadData(dispatch);
        })();
    }, [dispatch]);

    return (
        <>
            <h3>Using Context + React Reducer</h3>
            <Card title="Stocks">
                <StockAssetsView />
            </Card>
            <Card title="Bonds">
                <BondsView />
            </Card>
            <Card title="Cash">
                <CashAccountsView />
            </Card>
        </>
    );
}
