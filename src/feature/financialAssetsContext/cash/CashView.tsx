import { FinancialAssetsContext, useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext.ts';
import Cash from './Cash';

export default function CashView() {
  const cash = useFinancialAssetsWithContext(FinancialAssetsContext).cash;
  const cashElements = cash.map(cashEntry => <Cash cash={cashEntry} />);
  return (
    <>
      <h3>Cash</h3>
      {cashElements}
    </>
  );
}
