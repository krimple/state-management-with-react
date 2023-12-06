import { useFinancialAssetsWithContext } from '../useFinancialAssetsWithContext.ts';
import Stock from './Stock';

export default function StocksView() {
  const { stocks } = useFinancialAssetsWithContext();
  const stockElements = stocks.map((stock) => (<Stock key={stock.id} stock={stock}/>));
  return (
    <>
      <h3>Stocks</h3>
      { stockElements }
    </>
    )
}
