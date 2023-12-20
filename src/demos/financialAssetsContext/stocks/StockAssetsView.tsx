import { useContext } from 'react';
import { FinancialAssetsContext } from '../useFinancialAssetsWithContext';
import StockAssetView from './StockAssetView';

export default function StockAssetsView() {
    const context = useContext(FinancialAssetsContext)?.assets;

    const { stocks } = context;

    if (!stocks) {
        return <p>Wait...</p>;
    }

    const stockElements = stocks.map((stock) => <StockAssetView key={stock.id} stock={stock} />);
    return <>{stockElements}</>;
}
