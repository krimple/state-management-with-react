import { FinancialAssetType, isStockAsset, StockAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import StockAssetView from './StockAssetView';

export default function StockAssetsView() {
    const { assets } = useFinancialAssetsContext().state;
    const stockElements = assets
        .filter((a) => isStockAsset(a))
        .map((stock: FinancialAssetType) => <StockAssetView key={stock.id} stock={stock as StockAsset} />);
    return <>{stockElements}</>;
}
