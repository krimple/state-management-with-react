import Button from '../../../components/Button';
import { CashAsset } from '../../../types';

type CashProps = {
    cash: CashAsset;
    toggleForm: () => void;
};

export default function CashAccountDisplay({ cash, toggleForm }: CashProps) {
    return (
        <div className="flex">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <span className="mx-2 py-2">
                Cash in {''.concat('XXXXXX', cash.accountNumber.substring(-1, 5))} : {cash.balance} - Type :{' '}
                {cash.accountType}
            </span>
        </div>
    );
}
