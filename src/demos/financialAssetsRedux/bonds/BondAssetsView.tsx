import { BondAsset } from '../../../types';
import { useAppSelector } from '../store/hooks';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    const bondsAssets = useAppSelector((state) => state.bonds);

    const bondElements = bondsAssets?.map((bondAsset: BondAsset) => (
        <BondAssetView key={bondAsset.id} bond={bondAsset} />
    ));

    return <>{bondElements}</>;
}
