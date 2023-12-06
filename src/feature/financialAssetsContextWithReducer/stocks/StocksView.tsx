import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import Stock from './Stock';

export default function StocksView() {
  const { stocks } = useFinancialAssetsContext().state;
  const stockElements = stocks.map((stock ) => (<Stock stock={stock}/>));
  return (
    <>
      <h3>Stocks</h3>
      { stockElements }
    </>
    )
}
