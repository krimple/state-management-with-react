import { useFinancialAssetsWithContext, FinancialAssetsContext } from '../useFinancialAssetsWithContext.ts';
import Bond from './Bond';

export default function BondsView() {
  const bonds = useFinancialAssetsWithContext(FinancialAssetsContext).bonds;
  const bondElements = bonds.map((bond) => (<Bond bond={bond}/>));
  return (
    <>
      <h3>Bonds</h3>
      { bondElements }
    </>
  )
}
