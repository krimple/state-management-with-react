import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import Cash from './Cash';
import { CashAsset, isCashAsset } from '../../../types';

export default function CashView() {
  const assets = useFinancialAssetsContext().state.assets;
  const cashAssets: CashAsset[] = assets.filter(a => isCashAsset(a)) as CashAsset[];
  const cashElements = cashAssets.map(cashAsset => (<Cash key={cashAsset.id} cash={cashAsset} />));
  return (
    <>
      <h3>Cash</h3>
      {cashElements}
    </>
  );
}
