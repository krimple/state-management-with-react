import { StockAssetType } from '../useFinancialAssets.tsx';

export interface StockProps {
  stock: StockAssetType
}
export default function Stock({stock}: StockProps) {

  return (
    <p>
      Ticker: {stock.ticker} - Basis: {stock.basisCost}, Info {stock.description}
    </p>
  )

}
