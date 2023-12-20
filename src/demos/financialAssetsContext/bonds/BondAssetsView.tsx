import { useContext } from 'react';
import { FinancialAssetsContext } from '../useFinancialAssetsWithContext';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    const context = useContext(FinancialAssetsContext)?.assets;

    const { bonds } = context;

    if (!bonds) {
        return <p>Loading...</p>;
    }

    const bondElements = bonds.map((bond) => <BondAssetView key={bond.id} bond={bond} />);
    return <>{bondElements}</>;
}
