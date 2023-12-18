import { useState } from 'react';
import Button from '../../../components/Button';
import { CashAsset } from '../../../types';
import EditCashForm from './EditCashForm';

export interface CashProps {
    cash: CashAsset;
}

export default function Cash({ cash }: CashProps) {
    const [editing, setEditing] = useState(false);

    // TODO - turn form toggle into hook?
    function toggleForm() {
        setEditing(!editing);
    }

    return (
        <>
            {!editing && (
                <section>
                    Cash in {''.concat('XXXXXX', cash.accountNumber.substring(-1, 5))} - Value: {cash.balance} - Type:{' '}
                    {cash.accountType}
                </section>
            )}
            {editing && <EditCashForm cash={cash} onClose={() => setEditing(false)} />}
            <Button type="button" label={editing ? 'Close' : 'Edit'} onClick={toggleForm} />
        </>
    );
}
