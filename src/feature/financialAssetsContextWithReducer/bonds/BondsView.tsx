import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import Bond from './Bond';

export default function BondsView() {
  const {bonds} = useFinancialAssetsContext().state;
  const bondElements = bonds.map((bond) => (<Bond key={bond.id} bond={bond}/>));
  return (
    <>
      <h3>Bonds</h3>
      { bondElements }
    </>
  )
}
