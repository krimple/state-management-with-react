import { useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext.ts';
import Bond from './Bond';
import { BondAsset, isBondAsset } from '../../../types';

export default function BondsView() {
  const assets = useFinancialAssetsWithContext();
  const bonds = assets.filter(a => isBondAsset(a)) as BondAsset[];
  const bondElements = bonds.map((bond) => (<Bond key={bond.id} bond={bond}/>));
  return (
    <>
      { bondElements }
    </>
  )
}
