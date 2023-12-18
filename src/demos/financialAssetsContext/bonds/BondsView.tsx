import { BondAsset, isBondAsset } from '../../../types';
import { useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext';
import Bond from './Bond';

export default function BondsView() {
    const assets = useFinancialAssetsWithContext();
    const bonds = assets.filter((a) => isBondAsset(a)) as BondAsset[];
    const bondElements = bonds.map((bond) => <Bond key={bond.id} bond={bond} />);
    return <>{bondElements}</>;
}
