import { useFinancialAssets, FinancialAssetsContext } from '../useFinancialAssets.tsx';
import Stock from './Stock.tsx';

export default function StocksView() {
  const { stocks } = useFinancialAssets(FinancialAssetsContext);
  const stockElements = stocks.map((stock ) => (<Stock stock={stock}/>));
  return (
    <>
      <h3>Stocks</h3>
      { stockElements }
    </>
    )
}
