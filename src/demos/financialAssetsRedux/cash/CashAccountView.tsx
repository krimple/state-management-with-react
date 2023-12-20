import { useEditing } from '../../../hooks/editingHook';
import { CashAsset } from '../../../types';
import CashAccountDisplay from './CashAccountDisplay';
import EditCashAccountForm from './EditCashAccountForm';

export interface CashProps {
    cash: CashAsset;
}

export default function CashAccountView({ cash }: CashProps) {
    const { isEditing, toggleEditing } = useEditing(false);

    function handleSaveCompleted() {
        toggleEditing();
    }

    // TODO - turn form toggle into hook?
    function toggleForm() {
        toggleEditing();
    }

    return (
        <div className="asset-display-row">
            {!isEditing && <CashAccountDisplay cash={cash} toggleForm={toggleForm} />}
            {isEditing && <EditCashAccountForm cash={cash} onClose={handleSaveCompleted} />}
        </div>
    );
}
