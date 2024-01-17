import { StockAsset } from '../../../types';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';
import StockAssetView from './StockAssetView';

export default function StockAssetsView() {
    const stockAssets = useFinancialAssetsContext().state?.assets?.stocks;
    const stockElements = stockAssets.map((stock: StockAsset) => <StockAssetView key={stock.id} stock={stock} />);
    return <>{stockElements}</>;
}
