import { useEditing } from '../../../hooks/editingHook';
import { CashAsset } from '../../../types';
import CashDisplay from './CashDisplay';
import EditCashAccountForm from './EditCashAccountForm';

export interface CashProps {
    cash: CashAsset;
    onUpdated: () => void;
}

export default function CashAccountView({ cash, onUpdated }: CashProps) {
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
            {!isEditing && <CashDisplay cash={cash} toggleForm={toggleForm} />}
            {isEditing && <EditCashAccountForm cash={cash} onClose={handleSaveCompleted} />}
        </div>
    );
}
