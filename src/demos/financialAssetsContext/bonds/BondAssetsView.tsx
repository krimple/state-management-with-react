import { useContext } from 'react';
import { FinancialAssetsContext } from '../useFinancialAssetsWithContext';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    let { bonds } = useContext(FinancialAssetsContext)?.assets;

    if (!bonds) {
        return <p>Wait...</p>;
    }

    const bondElements = bonds.map((bond) => <BondAssetView key={bond.id} bond={bond} />);
    return <>{bondElements}</>;
}
