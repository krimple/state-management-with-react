import { CashAsset } from '../../../types';
import useFinancialAssets from '../hooks/useFinancialAssets';
import CashAccountView from './CashAccountView';

export default function CashAccountsView() {
    const { assets } = useFinancialAssets();
    const { cash } = assets;

    if (!cash) {
        return <p>Wait...</p>;
    }
    const cashElements = cash.map((cashEntry: CashAsset) => <CashAccountView key={cashEntry.id} cash={cashEntry} />);
    return <>{cashElements}</>;
}
