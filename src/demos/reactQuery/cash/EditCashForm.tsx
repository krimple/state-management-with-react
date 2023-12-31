import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import { CashAsset } from '../../../types';
import { fetchJsonThrowingErrors } from '../utils/fetch-utils';

interface EditCashFormProps {
    cash: CashAsset;
    onClose: () => void;
}

export default function EditCashForm({ cash: originalCashData, onClose }: EditCashFormProps) {
    const [cashState, setFormState] = useState(originalCashData);
    const client = useQueryClient();
    const { mutate, isError, error, isSuccess, isPending } = useMutation({
        mutationFn: (updatedCash: CashAsset) => {
            return fetchJsonThrowingErrors(`/api/cash/${updatedCash.id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedCash),
                headers: { 'Content-Type': 'application/json' },
            });
        },
        onSuccess: () => {
            return client.invalidateQueries({ queryKey: ['cash'] });
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
        setFormState((formState: CashAsset) => {
            return { ...formState, [event.target.name]: event.target.value };
        });
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        mutate(cashState);
        onClose();
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="balance">Balance</label>
            <input type="number" name="balance" min={0} defaultValue={cashState.balance} onChange={handleChange} />

            <label htmlFor="balance">Balance</label>
            <input
                type="number"
                name="balance"
                min={1}
                step={0.01}
                defaultValue={cashState.balance}
                onChange={handleChange}
            />
            <label htmlFor="accountType">Account Type</label>
            <input type="string" name="accountType" defaultValue={cashState.accountType} onChange={handleChange} />

            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
