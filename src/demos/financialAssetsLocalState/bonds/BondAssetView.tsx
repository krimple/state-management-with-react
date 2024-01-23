import useEditing from '@/hooks/editingHook';
import { BondAsset } from '@/types';
import { useCallback } from 'react';
import BondAssetDisplay from './BondAssetDisplay';
import EditBondForm from './EditBondForm';

export interface BondProps {
    bond: BondAsset;
    onUpdated: () => void;
}

export default function BondAssetView({ bond, onUpdated }: BondProps) {
    const { isEditing, toggleEditing } = useEditing(false);

    const handleSaveCompleted = useCallback(() => {
        toggleEditing();
        onUpdated();
    }, []);

    // TODO - turn form toggle into hook?
    const toggleForm = useCallback(() => {
        toggleEditing();
    }, []);

    return (
        <div className="asset-display-row">
            {!isEditing && <BondAssetDisplay bond={bond} toggleForm={toggleForm} />}
            {isEditing && <EditBondForm bond={bond} onSave={handleSaveCompleted} onCancel={toggleEditing} />}
        </div>
    );
}
