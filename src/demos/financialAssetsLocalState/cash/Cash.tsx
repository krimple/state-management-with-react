import Button from '../../../components/Button';
import { useEditing } from '../../../hooks/editingHook';
import { CashAsset } from '../../../types';
import EditCashForm from './EditCashForm';

export interface CashProps {
    cash: CashAsset;
    onUpdated: () => void;
}

export default function Cash({ cash, onUpdated }: CashProps) {
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
                <div>
                    <Button type="button" label="Edit" onClick={toggleForm} />
                    Cash in {cash.accountNumber && ''.concat('XXXXXX', cash.accountNumber.substring(-1, 5))} - Value:{' '}
                    {cash.balance} - Type: {cash.accountType}
                </div>
            )}
            {isEditing && <EditCashForm cash={cash} onClose={handleSaveCompleted} />}
        </>
    );
}
