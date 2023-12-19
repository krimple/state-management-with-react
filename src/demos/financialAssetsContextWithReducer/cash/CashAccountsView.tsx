import { CashAsset, isCashAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import CashAccountView from './CashAccountView';

export default function CashAccountsView() {
    const { assets } = useFinancialAssetsContext().state;
    const cashElements = assets

        .filter((a) => isCashAsset(a))
        .map((cashAsset) => <CashAccountView key={cashAsset.id} cash={cashAsset as CashAsset} />);
    return <>{cashElements}</>;
}
