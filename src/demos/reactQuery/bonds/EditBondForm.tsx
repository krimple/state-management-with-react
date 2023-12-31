import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import { BondAsset } from '../../../types';
import { fetchJsonThrowingErrors } from '../utils/fetch-utils';

interface EditBondFormProps {
    bond: BondAsset;
    onClose: () => void;
}

export default function EditBondForm({ bond: originalBondData, onClose }: EditBondFormProps) {
    const [bondState, setFormState] = useState(originalBondData);

    const client = useQueryClient();
    const { mutate, isError, error, isSuccess, isPending } = useMutation({
        mutationFn: (updatedBond: BondAsset) => {
            return fetchJsonThrowingErrors(`/api/bonds/${updatedBond.id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedBond),
                headers: { 'Content-Type': 'application/json' },
            });
        },
        onSuccess: () => {
            return client.invalidateQueries({ queryKey: ['bonds'] });
        },
    });

    if (isError) {
        return <pre>An error occurred during update: ${error.message}</pre>;
    }

    if (isPending) {
        return <p>Updating...</p>;
    }

    if (isSuccess) {
        return <p>Update successful.</p>;
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormState((formState: BondAsset) => {
            return { ...formState, [event.target.name]: event.target.value };
        });
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        mutate(bondState);
        onClose();
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

            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
