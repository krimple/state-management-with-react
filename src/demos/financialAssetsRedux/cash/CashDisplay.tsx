import Button from '../../../components/Button';
import { CashAsset } from '../../../types';

interface CashDisplayProps {
    cash: CashAsset;
    toggleForm: () => void;
}

export default function CashDisplay({ cash, toggleForm }: CashDisplayProps) {
    return (
        <div className="flex">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <span className="mx-2 py-2">
                Cash in {cash.accountNumber && ''.concat('XXXXXX', cash.accountNumber.substring(-1, 5))} - Value:{' '}
                {cash.balance} - Type: {cash.accountType}
            </span>
        </div>
    );
}
