import Button from '../../../components/Button';
import { CashAsset } from '../../../types';

interface CashDisplayProps {
    cash: CashAsset;
    toggleForm: () => void;
}

export default function CashAccountDisplay({ cash, toggleForm }: CashDisplayProps) {
    return (
        <div className="flex flex-auto py-auto">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <div className="asset-display-fields">
                <div className="font-bold">
                    Cash in {cash.accountNumber && ''.concat('XXXXXX', cash.accountNumber.substring(-1, 5))}
                </div>
                <div className="font-bold">Balance</div>
                <div>{cash.balance}</div>
                <div className="font-bold">Account Type</div>
                <div>{cash.accountType}</div>
            </div>
        </div>
    );
}
