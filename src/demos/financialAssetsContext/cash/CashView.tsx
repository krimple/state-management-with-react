import { CashAsset, isCashAsset } from '../../../types';
import { useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext';
import Cash from './Cash';

export default function CashView() {
    const assets = useFinancialAssetsWithContext();
    const cash = assets.filter((a) => isCashAsset(a)) as CashAsset[];
    const cashElements = cash.map((cashEntry) => <Cash key={cashEntry.id} cash={cashEntry} />);
    return <>{cashElements}</>;
}
