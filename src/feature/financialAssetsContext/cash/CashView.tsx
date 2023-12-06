import { useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext.ts';
import Cash from './Cash';

export default function CashView() {
  const cash = useFinancialAssetsWithContext().cash;
  const cashElements = cash.map(cashEntry => <Cash key={cashEntry.id} cash={cashEntry} />);
  return (
    <>
      <h3>Cash</h3>
      {cashElements}
    </>
  );
}
