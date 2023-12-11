import Stock from './Stock';
import { StockAsset } from '../../../types';
import { useAppSelector } from '../store/hooks.ts';

export default function StocksView() {
  const stockAssets = useAppSelector(state => state.stocks);

  const stockElements = stockAssets.map((stock: StockAsset) =>
        (<Stock key={stock.id} stock={stock as StockAsset }/>));

  return (
    <>
      { stockElements }
    </>
    )
}
