import Button from '../../../components/Button';
import { BondAsset } from '../../../types';

interface BondAssetDisplayProps {
    bond: BondAsset;
    toggleForm: () => void;
}

export default function BondAssetDisplay({ bond, toggleForm }: BondAssetDisplayProps) {
    return (
        <div className="flex">
            <Button label="Edit" type="button" onClick={toggleForm} />
            <span className="mx-2 py-2">
                Bond: {bond.issuingAgency} - Series {bond.bondSeries} - Initial Value {bond.initialValue} - Term{' '}
                {bond.maturityInMonths} months - Target value {bond.targetValue}
            </span>
        </div>
    );
}
