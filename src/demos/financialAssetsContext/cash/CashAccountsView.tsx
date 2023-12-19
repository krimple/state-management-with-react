import { useContext } from 'react';
import { FinancialAssetsContext } from '../useFinancialAssetsWithContext';
import CashAccountView from './CashAccountView';

export default function CashAccountsView() {
    const context = useContext(FinancialAssetsContext)?.assets;

    const { cash } = context;

    if (!cash) {
        return <p>Wait...</p>;
    }
    const cashElements = cash.map((cashEntry) => <CashAccountView key={cashEntry.id} cash={cashEntry} />);
    return <>{cashElements}</>;
}
