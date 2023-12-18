import Button from '../../../components/Button';
import { useEditing } from '../../../hooks/editingHook';
import { StockAsset } from '../../../types';
import EditStockForm from './EditStockForm';

export interface StockProps {
    stock: StockAsset;
    onUpdated: () => void;
}

/**
 * One stock asset either shown as read-only data with an edit button or as an editable form
 * for update.
 *
 * @param stock the stock to display/edit
 * @param onUpdated an event we provide for the parent component, StocksView, in order to refresh the datasource
 * @constructor
 */
export default function Stock({ stock, onUpdated }: StockProps) {
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
        <>
            {!isEditing && (
                <>
                    <Button type="button" label="Edit" onClick={toggleForm} />
                    <span className="mx-2">
                        Ticker: {stock.ticker} - Basis: {stock.basisCost} - Current Value: {stock.currentValue} - Info{' '}
                    </span>
                    {stock.description}
                </>
            )}
            {isEditing && <EditStockForm stock={stock} onClose={handleSaveCompleted} />}
        </>
    );
}
