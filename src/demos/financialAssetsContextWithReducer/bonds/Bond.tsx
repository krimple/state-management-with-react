import { useState } from 'react';
import Button from '../../../components/Button';
import { BondAsset } from '../../../types';
import EditBondForm from './EditBondForm';

type BondProps = {
    bond: BondAsset;
};
export default function Bond({ bond }: BondProps) {
    const [editing, setEditing] = useState(false);

    function toggleForm() {
        setEditing(!editing);
    }

    return (
        <div>
            {!editing && (
                <section>
                    Bond: {bond.issuingAgency} - Series {bond.bondSeries} - Initial Value {bond.initialValue} - Term{' '}
                    {bond.maturityInMonths} months - Target value {bond.targetValue}
                </section>
            )}

            {editing && (
                <section>
                    <EditBondForm bond={bond} onClose={() => setEditing(false)} />
                </section>
            )}

            <Button type="button" label={editing ? 'Close' : 'Edit '} onClick={toggleForm} />
        </div>
    );
}
