import useEditing from '../../../hooks/editingHook';
import { BondAsset } from '../../../types';
import BondAssetDisplay from './BondAssetDisplay';
import EditBondForm from './EditBondForm';

export interface BondProps {
    bond: BondAsset;
}

export default function BondAssetView({ bond }: BondProps) {
    const { isEditing, toggleEditing } = useEditing(false);
    function handleSaveCompleted() {
        toggleEditing();
    }

    function toggleForm() {
        toggleEditing();
    }

    return (
        <div className="asset-display-row">
            {!isEditing && <BondAssetDisplay bond={bond} toggleForm={toggleForm} />}
            {isEditing && <EditBondForm bond={bond} onClose={handleSaveCompleted} />}
        </div>
    );
}
