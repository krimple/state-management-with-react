import { BondAsset, isBondAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import Bond from './Bond';

export default function BondsView() {
    const assets = useFinancialAssetsContext().state.assets;
    const bondAssets: BondAsset[] = assets.filter((a) => isBondAsset(a)) as BondAsset[];
    const bondElements = bondAssets.map((bondAsset: BondAsset) => <Bond key={bondAsset.id} bond={bondAsset} />);
    return <>{bondElements}</>;
}
