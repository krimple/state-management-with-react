import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import Stock from './Stock';
import { isStockAsset } from '../../../types';

export default function StocksView() {
  const { assets } = useFinancialAssetsContext().state;
  const stockElements =
    assets
      .filter(a => isStockAsset(a))
      .map((stock ) =>
        (<Stock key={stock.id} stock={stock}/>));
  return (
    <>
      { stockElements }
    </>
    )
}
