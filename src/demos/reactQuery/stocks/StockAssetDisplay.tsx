import Button from '../../../components/Button';
import { StockAsset } from '../../../types';

export interface StockProps {
    stock: StockAsset;
    toggleForm: () => void;
}
export default function StockAssetDisplay({ stock, toggleForm }: StockProps) {
    return (
        <div className="flex">
            <Button label="Edit" type="button" onClick={toggleForm} />
            <span className="mx-2 py-2">
                Ticker: {stock.ticker} - Basis: {stock.basisCost}, Info {stock.description}
            </span>
        </div>
    );
}
