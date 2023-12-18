import Button from '../../../components/Button';
import { BondAsset } from '../../../types';

interface BondDisplayProps {
    bond: BondAsset;
    toggleForm: () => void;
}

export default function BondAssetDisplay({ bond, toggleForm }: BondDisplayProps) {
    return (
        <div className="flex">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <span className="mx-2 py-2">
                Bond: {bond.issuingAgency} - Series {bond.bondSeries} - Initial Value {bond.initialValue} - Term{' '}
                {bond.maturityInMonths} months - Target value {bond.targetValue}
            </span>
        </div>
    );
}
