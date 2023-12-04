import { FinancialAssetsContext, useFinancialAssets } from '../useFinancialAssets.tsx';
import Cash from './Cash.tsx';

export default function CashView() {
  const cash = useFinancialAssets(FinancialAssetsContext).cash;
  const cashElements = cash.map(cashEntry => <Cash cash={cashEntry} />);
  return (
    <>
      <h3>Cash</h3>
      {cashElements}
    </>
  );
}
