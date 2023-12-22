import { ChangeEvent, FormEvent, useState } from 'react';
import { saveAsset } from '../../../apis';
import Button from '../../../components/Button';
import { BondAsset } from '../../../types';

interface EditBondFormProps {
    bond: BondAsset;
    onSave: () => void;
    onCancel: () => void;
}

export default function EditBondForm({ bond: originalBondData, onSave, onCancel }: EditBondFormProps) {
    const [bondState, setFormState] = useState<BondAsset>(originalBondData);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormState((formState: BondAsset) => {
            return { ...formState, [event.target.name]: event.target.value };
        });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            await saveAsset(bondState);
        } catch (e) {
            alert('Save failed. Check log.');
            console.error(e);
        }
        onSave();
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="issuingAgency">Issuing Agency</label>
            <input type="text" name="issuingAgency" defaultValue={bondState.issuingAgency} onChange={handleChange} />

            <label htmlFor="bondSeries">Bond Series</label>
            <input type="text" name="bondSeries" defaultValue={bondState.bondSeries} onChange={handleChange} />

            <label htmlFor="initialValue">Initial Value</label>
            <input
                type="number"
                min={1}
                step={0.01}
                name="initialValue"
                defaultValue={bondState.initialValue}
                onChange={handleChange}
            />

            <label htmlFor="targetValue">Target Value</label>
            <input
                type="number"
                min={1}
                step={0.01}
                name="targetValue"
                defaultValue={bondState.targetValue}
                onChange={handleChange}
            />

            <label htmlFor="maturityInMonths">Maturity (Months)</label>
            <input
                type="number"
                name="maturityInMonths"
                min={1}
                step={1}
                max={360}
                defaultValue={bondState.maturityInMonths}
                onChange={handleChange}
            />

            <Button label="Cancel" type="button" onClick={onCancel} />
            <Button label="Save" type="submit" />
        </form>
    );
}
