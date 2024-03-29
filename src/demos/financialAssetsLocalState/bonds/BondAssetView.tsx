import useEditing from '../../../hooks/editingHook';
import { BondAsset } from '../../../types';
import BondAssetDisplay from './BondAssetDisplay';
import EditBondForm from './EditBondForm';

export interface BondProps {
    bond: BondAsset;
    onUpdated: () => void;
}

export default function BondAssetView({ bond, onUpdated }: BondProps) {
    const { isEditing, toggleEditing } = useEditing(false);
    function handleSaveCompleted() {
        toggleEditing();
        onUpdated();
    }

    return (
        <div className="asset-display-row">
            {!isEditing && <BondAssetDisplay bond={bond} toggleForm={toggleEditing} />}
            {isEditing && <EditBondForm bond={bond} onSave={handleSaveCompleted} onCancel={toggleEditing} />}
        </div>
    );
}
