import Button from '../../../components/Button';
import { useEditing } from '../../../hooks/editingHook';
import { BondAsset } from '../../../types';
import EditBondForm from './EditBondForm';

export interface BondProps {
    bond: BondAsset;
    onUpdated: () => void;
}

export default function Bond({ bond, onUpdated }: BondProps) {
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
                    Bond: {bond.issuingAgency} - Series {bond.bondSeries} -{bond.initialValue}
                    for {bond.maturityInMonths} months = {bond.targetValue}
                </div>
            )}
            {isEditing && <EditBondForm bond={bond} onClose={handleSaveCompleted} />}
        </>
    );
}
