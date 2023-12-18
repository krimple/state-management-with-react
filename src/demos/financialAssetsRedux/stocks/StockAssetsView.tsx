import { StockAsset } from '../../../types';
import { useAppSelector } from '../store/hooks';
import StockAssetView from './StockAssetView.tsx';

export default function StockAssetsView() {
    const stockAssets = useAppSelector((state) => state.stocks);

    const stockElements = stockAssets.map((stock: StockAsset) => (
        <StockAssetView key={stock.id} stock={stock as StockAsset} />
    ));

    return <>{stockElements}</>;
}
