import { CashAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import CashAccountView from './CashAccountView';

export default function CashAccountsView() {
    const cashAssets = useFinancialAssetsContext().state?.assets?.cash;

    const cashElements = cashAssets.map((cashAsset: CashAsset) => (
        <CashAccountView key={cashAsset.id} cash={cashAsset} />
    ));
    return <>{cashElements}</>;
}
