import { useEditing } from '../../../hooks/editingHook';
import { StockAsset } from '../../../types';
import EditStockAssetForm from './EditStockAssetForm';
import StockAssetDisplay from './StockAssetDisplay';

type StockProps = {
    stock: StockAsset;
};
export default function StockAccountView({ stock }: StockProps) {
    const { isEditing, toggleEditing } = useEditing(false);

    return (
        <div className="asset-display-row">
            {!isEditing && <StockAssetDisplay stock={stock} toggleForm={toggleEditing} />}
            {isEditing && <EditStockAssetForm stock={stock} onClose={toggleEditing} />}
        </div>
    );
}
