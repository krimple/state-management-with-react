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
            console.log('Save failed. Check log.');
            console.error(e);
        }
        onSave();
    }

    return (
        <form className="grid-form" data-testid="form" onSubmit={handleSubmit}>
            <label htmlFor="issuingAgency">Issuing Agency</label>
            <input
                type="text"
                data-testid="issuingAgency"
                name="issuingAgency"
                defaultValue={bondState.issuingAgency}
                onChange={handleChange}
            />

            <label htmlFor="bondSeries">Bond Series</label>
            <input
                type="text"
                data-testid="bondSeries"
                name="bondSeries"
                defaultValue={bondState.bondSeries}
                onChange={handleChange}
            />

            <label htmlFor="initialValue">Initial Value</label>
            <input
                type="number"
                data-testid="initialValue"
                min={1}
                step={0.01}
                name="initialValue"
                defaultValue={bondState.initialValue}
                onChange={handleChange}
            />

            <label htmlFor="targetValue">Target Value</label>
            <input
                type="number"
                data-testid="targetValue"
                min={1}
                step={0.01}
                name="targetValue"
                defaultValue={bondState.targetValue}
                onChange={handleChange}
            />

            <label htmlFor="maturityInMonths">Maturity (Months)</label>
            <input
                type="number"
                data-testid="maturityInMonths"
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
