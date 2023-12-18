import { useContext } from 'react';
import { FinancialAssetsContext } from '../useFinancialAssetsWithContext';
import StockAssetView from './StockAssetView';

export default function StockAssetsView() {
    let { stocks } = useContext(FinancialAssetsContext)?.assets;
    if (!stocks) {
        return <p>Wait...</p>;
    }

    const stockElements = stocks.map((stock) => <StockAssetView key={stock.id} stock={stock} />);
    return <>{stockElements}</>;
}
