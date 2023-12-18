import { CashAsset, isCashAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import Cash from './Cash';

export default function CashView() {
    const { assets } = useFinancialAssetsContext().state;
    const cashElements = assets

        .filter((a) => isCashAsset(a))
        .map((cashAsset) => <Cash key={cashAsset.id} cash={cashAsset as CashAsset} />);
    return <>{cashElements}</>;
}
