import { useEditing } from '../../../hooks/editingHook';
import { CashAsset } from '../../../types';
import CashAccountDisplay from './CashAccountDisplay';
import EditCashAccountForm from './EditCashAccountForm';

type CashProps = {
    cash: CashAsset;
};
export default function CashAccountView({ cash }: CashProps) {
    const { isEditing, toggleEditing } = useEditing(false);

    return (
        <div className="asset-display-row">
            {!isEditing && <CashAccountDisplay cash={cash} toggleForm={toggleEditing} />}
            {isEditing && <EditCashAccountForm cash={cash} onClose={toggleEditing} />}
        </div>
    );
}
