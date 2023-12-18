import { FinancialAssetType, isStockAsset, StockAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import Stock from './Stock';

export default function StocksView() {
    const { assets } = useFinancialAssetsContext().state;
    const stockElements = assets
        .filter((a) => isStockAsset(a))
        .map((stock: FinancialAssetType) => <Stock key={stock.id} stock={stock as StockAsset} />);
    return <>{stockElements}</>;
}
