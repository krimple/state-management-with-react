import Button from '../../../components/Button.tsx';
import { StockAsset } from '../../../types';

interface StockDisplayProps {
    stock: StockAsset;
    toggleForm: () => void;
}

export default function StockDisplay({ stock, toggleForm }: StockDisplayProps) {
    return (
        <div className="flex">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <span className="mx-2">
                Ticker: {stock.ticker} - Basis: {stock.basisCost} - Current Value: {stock.currentValue} - Info{' '}
                {stock.description}
            </span>
        </div>
    );
}
