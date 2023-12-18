import { ChangeEvent, FormEvent, useState } from 'react';
import { saveAsset } from '../../../apis/save-asset';
import Button from '../../../components/Button';
import { BondAsset } from '../../../types';

interface EditBondFormProps {
    bond: BondAsset;
    onClose: () => void;
}

export default function EditBondForm({ bond: originalBondData, onClose }: EditBondFormProps) {
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
        onClose();
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="bondSeries">Bond Series</label>
            <input type="string" name="bondSeries" defaultValue={bondState.bondSeries} onChange={handleChange} />
            <label htmlFor="issuingAgency">Issuing Agency</label>
            <input type="string" name="issuingAgency" defaultValue={bondState.issuingAgency} onChange={handleChange} />
            <label htmlFor="initialValue">Initial Value</label>
            <input type="number" name="initialValue" defaultValue={bondState.initialValue} onChange={handleChange} />
            <label htmlFor="targetValue">Target Value</label>
            <input type="number" name="targetValue" defaultValue={bondState.targetValue} onChange={handleChange} />
            <label htmlFor="maturityInMonths">Maturity in Months</label>
            <input
                type="number"
                name="maturityInMonths"
                defaultValue={bondState.maturityInMonths}
                onChange={handleChange}
            />
            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
