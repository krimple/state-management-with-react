import { useState } from 'react';
import { StockAsset } from '../../../types';
import EditStockForm from './EditStockForm';
import StockDisplay from './StockDisplay.tsx';

export interface StockProps {
    stock: StockAsset;
}

export default function StockAssetView({ stock }: StockProps) {
    const [editing, setEditing] = useState(false);

    function toggleForm() {
        setEditing(!editing);
    }

    // TODO format better
    return (
        <div className="asset-display-row">
            {!editing && <StockDisplay stock={stock} toggleForm={toggleForm} />}
            {editing && <EditStockForm stock={stock} onClose={() => setEditing(false)} />}
        </div>
    );
}
