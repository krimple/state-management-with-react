import Stock from './Stock';
import { StockAsset } from '../../../types';
import { getStocks } from '../../../apis/get-assets.ts';
import { useEffect, useState } from 'react';

export default function StocksView() {

  const [stocks, setStocks] = useState<StockAsset[]>([]);
  useEffect(() => {
    (async () => {
      setStocks(await getStocks());
    })();
  }, []);
  const stockElements = stocks.map((stock) => (<Stock key={stock.id} stock={stock}/>));
  return (
    <>
      { stockElements }
    </>
    )
}
