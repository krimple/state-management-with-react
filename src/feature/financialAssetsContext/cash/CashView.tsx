import { useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext.ts';
import Cash from './Cash';
import { CashAsset, isCashAsset } from '../../../types';

export default function CashView() {
  const assets = useFinancialAssetsWithContext();
  const cash = assets.filter(a => isCashAsset(a)) as CashAsset[];
  const cashElements = cash.map(cashEntry => <Cash key={cashEntry.id} cash={cashEntry} />);
  return (
    <>
      {cashElements}
    </>
  );
}
