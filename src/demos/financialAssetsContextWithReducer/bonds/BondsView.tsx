import { BondAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import BondAssetView from './BondAssetView';

export default function BondsView() {
    const bondAssets = useFinancialAssetsContext().state?.assets?.bonds;

    const bondElements = bondAssets.map((bondAsset: BondAsset) => (
        <BondAssetView key={bondAsset.id} bond={bondAsset} />
    ));
    return <>{bondElements}</>;
}
