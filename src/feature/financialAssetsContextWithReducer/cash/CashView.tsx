import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import Cash from './Cash';

export default function CashView() {
  const {cash}= useFinancialAssetsContext().state;
  const cashElements = cash.map(cashEntry => <Cash cash={cashEntry} />);
  return (
    <>
      <h3>Cash</h3>
      {cashElements}
    </>
  );
}
