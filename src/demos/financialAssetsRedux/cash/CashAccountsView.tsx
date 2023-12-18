import { CashAsset } from '../../../types';
import { useAppSelector } from '../store/hooks';
import CashAccountView from './CashAccountView.tsx';

export default function CashAccountsView() {
    const cashAssets = useAppSelector((state) => state.cash);

    const cashElements = cashAssets.map((cashAsset) => (
        <CashAccountView key={cashAsset.id} cash={cashAsset as CashAsset} />
    ));

    return <>{cashElements}</>;
}
