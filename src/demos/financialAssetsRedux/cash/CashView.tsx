import { CashAsset } from '../../../types';
import { useAppSelector } from '../store/hooks';
import Cash from './Cash';

export default function CashView() {
    const cashAssets = useAppSelector((state) => state.cash);

    const cashElements = cashAssets.map((cashAsset) => <Cash key={cashAsset.id} cash={cashAsset as CashAsset} />);

    return <>{cashElements}</>;
}
