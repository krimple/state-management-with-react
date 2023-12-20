import Button from '../../../components/Button';
import { StockAsset } from '../../../types';

interface StockDisplayProps {
    stock: StockAsset;
    toggleForm: () => void;
}

export default function StockAssetDisplay({ stock, toggleForm }: StockDisplayProps) {
    return (
        <div className="asset-display-container">
            <Button type="button" label="Edit" onClick={toggleForm} />

            <div className="asset-display-fields">
                <div className="font-bold">Stock</div>
                <div className="">{stock.description}</div>

                <div className="font-bold">Ticker</div>
                <div>{stock.ticker}</div>

                <div className="font-bold">Basis</div>
                <div>{stock.basisCost}</div>

                <div className="font-bold">Latest</div>
                <div>{stock.currentValue}</div>
            </div>
        </div>
    );
}
