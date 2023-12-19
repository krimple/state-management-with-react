import Button from '../../../components/Button';
import { BondAsset } from '../../../types';

interface BondAssetDisplayProps {
    bond: BondAsset;
    toggleForm: () => void;
}

export default function BondAssetDisplay({ bond, toggleForm }: BondAssetDisplayProps) {
    return (
        <div className="flex flex-auto py-auto">
            <Button type="button" label="Edit" onClick={toggleForm} />
            <div className="asset-display-fields">
                <div className="font-bold">Bond</div>
                <div className="font-bold">Issuing Agency</div>
                <div>{bond.issuingAgency}</div>
                <div className="font-bold">Series</div>
                <div>{bond.bondSeries}</div>
                <div className="font-bold">Initial Value</div>
                <div>{bond.initialValue}</div>
                <div className="font-bold">Maturity (months)</div>
                <div>{bond.maturityInMonths}</div>
                <div className="font-bold">Target Value</div>
                <div>{bond.targetValue}</div>
            </div>
        </div>
    );
}
