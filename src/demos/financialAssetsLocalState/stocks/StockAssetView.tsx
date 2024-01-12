import useEditing from '../../../hooks/editingHook';
import { StockAsset } from '../../../types';
import EditStockAssetForm from './EditStockAssetForm';
import StockAssetDisplay from './StockAssetDisplay';

export interface StockProps {
    stock: StockAsset;
    onUpdated: () => void;
}

/**
 * One stock asset either shown as read-only data with an edit button or as an editable form
 * for update.
 *
 * @param stock the stock to display/edit
 * @param onUpdated an event we provide for the parent component, StockAssetsView, in order to refresh the datasource
 * @constructor
 */
export default function StockAssetView({ stock, onUpdated }: StockProps) {
    // state for this component: whether we're showing the editor form or the list of attributes
    const { isEditing, toggleEditing } = useEditing(false);

    function handleSaveCompleted() {
        toggleEditing();
        onUpdated();
    }

    // TODO - turn form toggle into hook?
    function toggleForm() {
        toggleEditing();
    }

    return (
        <div className="asset-display-row">
            {!isEditing && <StockAssetDisplay stock={stock} toggleForm={toggleForm} />}
            {isEditing && <EditStockAssetForm stock={stock} onClose={handleSaveCompleted} />}
        </div>
    );
}
