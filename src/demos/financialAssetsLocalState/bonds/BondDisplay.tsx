import Button from '../../../components/Button.tsx';
import { BondAsset } from '../../../types';

interface BondDisplayProps {
    bond: BondAsset;
    toggleForm: () => void;
}

export default function BondDisplay({ bond, toggleForm }: BondDisplayProps) {
    return (
        <div className="flex">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <span className="mx-2">
                Bond: {bond.issuingAgency} - Series {bond.bondSeries} -{bond.initialValue}
                for {bond.maturityInMonths} months = {bond.targetValue}
            </span>
        </div>
    );
}
