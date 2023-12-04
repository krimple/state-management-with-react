import { useFinancialAssets, FinancialAssetsContext } from '../useFinancialAssets.tsx';
import Bond from './Bond.tsx';

export default function BondsView() {
  const bonds = useFinancialAssets(FinancialAssetsContext).bonds;
  const bondElements = bonds.map((bond) => (<Bond bond={bond}/>));
  return (
    <>
      <h3>Bonds</h3>
      { bondElements }
    </>
  )
}
