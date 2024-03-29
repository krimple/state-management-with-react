import { useMemo } from 'react';
import Button from '../../../components/Button';
import NumberFormatter from '../../../components/NumberFormatter';
import { StockAsset } from '../../../types';

interface StockDisplayProps {
    stock: StockAsset;
    toggleForm: () => void;
}

export default function StockAssetDisplay({ stock, toggleForm }: StockDisplayProps) {
    const onToggleForm = useMemo(() => toggleForm, [toggleForm]);
    return (
        <div className="asset-display-container">
            <Button type="button" label="Edit" onClick={onToggleForm} />

            <div className="asset-display-fields">
                <div className="font-bold">Stock</div>
                <div className="">{stock.description}</div>

                <div className="font-bold">Ticker</div>
                <div>{stock.ticker}</div>

                <div className="font-bold">Basis</div>
                <div>
                    <NumberFormatter value={stock.basisCost} currency={true} />
                </div>

                <div className="font-bold">Latest</div>
                <div>
                    <NumberFormatter value={stock.currentValue} currency={true} />
                </div>
            </div>
        </div>
    );
}
