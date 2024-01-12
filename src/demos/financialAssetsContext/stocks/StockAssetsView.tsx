import { StockAsset } from '../../../types';
import useFinancialAssets from '../hooks/useFinancialAssets';
import StockAssetView from './StockAssetView';

export default function StockAssetsView() {
    const context = useFinancialAssets().assets;

    const { stocks } = context;

    if (!stocks) {
        return <p>Wait...</p>;
    }

    const stockElements = stocks.map((stock: StockAsset) => <StockAssetView key={stock.id} stock={stock} />);
    return <>{stockElements}</>;
}
