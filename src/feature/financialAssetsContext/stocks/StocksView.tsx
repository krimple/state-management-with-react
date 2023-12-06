import { useFinancialAssetsWithContext, FinancialAssetsContext } from '../useFinancialAssetsWithContext.ts';
import Stock from './Stock';

export default function StocksView() {
  const { stocks } = useFinancialAssetsWithContext(FinancialAssetsContext);
  const stockElements = stocks.map((stock ) => (<Stock stock={stock}/>));
  return (
    <>
      <h3>Stocks</h3>
      { stockElements }
    </>
    )
}
