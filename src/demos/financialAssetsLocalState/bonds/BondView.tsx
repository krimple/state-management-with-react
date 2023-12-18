import { useEditing } from '../../../hooks/editingHook';
import { BondAsset } from '../../../types';
import BondDisplay from './BondDisplay.tsx';
import EditBondForm from './EditBondForm';

export interface BondProps {
    bond: BondAsset;
    onUpdated: () => void;
}

export default function BondView({ bond, onUpdated }: BondProps) {
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
            {!isEditing && <BondDisplay bond={bond} toggleForm={toggleForm} />}
            {isEditing && <EditBondForm bond={bond} onClose={handleSaveCompleted} />}
        </div>
    );
}
