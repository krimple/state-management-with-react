import { BondAsset } from '../../../types';
import { useAppSelector } from '../store/hooks';
import Bond from './Bond';

export default function BondsView() {
    const bondsAssets = useAppSelector((state) => state.bonds);

    const bondElements = bondsAssets?.map((bondAsset: BondAsset) => <Bond key={bondAsset.id} bond={bondAsset} />) || [];

    return <>{bondElements}</>;
}
