import { useFinancialAssetsWithContext } from "../useFinancialAssetsWithContext";
import Stock from "./Stock";
import { isStockAsset, StockAsset } from "../../../types";

export default function StocksView() {
  const assets = useFinancialAssetsWithContext();
  const stocks = assets.filter((a) => isStockAsset(a)) as StockAsset[];
  const stockElements = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} />
  ));
  return <>{stockElements}</>;
}
