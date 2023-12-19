import Button from '../../../components/Button';
import { StockAsset } from '../../../types';

interface StockDisplayProps {
    stock: StockAsset;
    toggleForm: () => void;
}

export default function StockAssetDisplay({ stock, toggleForm }: StockDisplayProps) {
    return (
        <div className="flex flex-auto py-auto">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <div className="asset-display-fields">
                <div className="font-bold">{stock.description}</div>
                <div className="font-bold">Ticker</div>
                <div>{stock.ticker}</div>
                <div className="font-bold">Basis</div>
                <div>{stock.basisCost}</div>
                <div className="font-bold">Current Value</div>
                <div>{stock.currentValue}</div>
            </div>
        </div>
    );
}
