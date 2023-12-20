import Button from '../../../components/Button';
import NumberFormatter from '../../../components/NumberFormatter';
import { CashAsset } from '../../../types';

interface CashDisplayProps {
    cash: CashAsset;
    toggleForm: () => void;
}

export default function CashAccountDisplay({ cash, toggleForm }: CashDisplayProps) {
    return (
        <div className="asset-display-container">
            <Button type="button" label="Edit" onClick={toggleForm} />

            <div className="asset-display-fields">
                <div className="font-bold">Account</div>
                <div>{cash.accountNumber && ''.concat('XX', cash.accountNumber.substring(-1, 5))}</div>

                <div className="font-bold">Balance</div>
                <div>
                    <NumberFormatter value={cash.balance} currency={true} />
                </div>

                <div className="font-bold">Type</div>
                <div>{cash.accountType}</div>
            </div>
        </div>
    );
}
