import Stock from "./Stock";
import { StockAsset } from "../../../types";
import { useEffect, useState } from "react";
import { getStocks } from "../../../apis/get-assets";

export default function StockView() {
  const [stocks, setStocks] = useState<StockAsset[]>([]);

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, []);

  async function loadData() {
    setStocks(await getStocks());
  }

  const stockElements = stocks.map((stockEntry) => (
    <Stock key={stockEntry.id} stock={stockEntry} onUpdated={loadData} />
  ));

  return <>{stockElements}</>;
}
