import { BondAsset } from '../../../types';
import useFinancialAssets from '../hooks/useFinancialAssets';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    const assets = useFinancialAssets().assets;
    const { bonds } = assets;

    if (!bonds) {
        return <p>Loading...</p>;
    }

    const bondElements = bonds.map((bond: BondAsset) => <BondAssetView key={bond.id} bond={bond} />);
    return <>{bondElements}</>;
}
