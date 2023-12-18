import { useEditing } from '../../../hooks/editingHook';
import { StockAsset } from '../../../types';
import EditStockForm from './EditStockForm';
import StockAssetDisplay from './StockAssetDisplay';

type StockProps = {
    stock: StockAsset;
};
export default function StockAssetView({ stock }: StockProps) {
    const { isEditing, toggleEditing } = useEditing(false);

    return (
        <div className="asset-display-row">
            {!isEditing && <StockAssetDisplay stock={stock} toggleForm={toggleEditing} />}
            {isEditing && <EditStockForm stock={stock} onClose={toggleEditing} />}
        </div>
    );
}
