import { ChangeEvent, FormEvent, useState } from 'react';
import { saveCashAccount } from '../../../apis/save-asset';
import Button from '../../../components/Button';
import { CashAsset } from '../../../types';

interface EditCashAccountFormProps {
    cash: CashAsset;
    onClose: () => void;
}

export default function EditCashAccountForm({ cash: originalCashData, onClose }: EditCashAccountFormProps) {
    const [cashState, setFormState] = useState<CashAsset>(originalCashData);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormState((formState: CashAsset) => {
            return { ...formState, [event.target.name]: event.target.value };
        });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            await saveCashAccount(cashState);
        } catch (e) {
            alert('Save failed. Check log.');
            console.error(e);
        }
        onClose();
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="accountNumber">Account Number</label>
            <input type="string" name="accountNumber" defaultValue={cashState.accountNumber} onChange={handleChange} />

            <label htmlFor="accountType">Account Type</label>
            <input type="string" name="accountType" defaultValue={cashState.accountType} onChange={handleChange} />

            <label htmlFor="balance">Balance</label>
            <input
                type="number"
                name="balance"
                min={1}
                step={0.01}
                defaultValue={cashState.balance}
                onChange={handleChange}
            />
            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
