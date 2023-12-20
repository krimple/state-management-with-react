import Button from '../../../components/Button';
import { BondAsset } from '../../../types';

interface BondAssetDisplayProps {
    bond: BondAsset;
    toggleForm: () => void;
}

export default function BondAssetDisplay({ bond, toggleForm }: BondAssetDisplayProps) {
    return (
        <div className="asset-display-container">
            <Button type="button" label="Edit" onClick={toggleForm} />

            <div className="asset-display-fields">
                <div className="font-bold">Issuer</div>
                <div>{bond.issuingAgency}</div>

                <div className="font-bold">Series</div>
                <div>{bond.bondSeries}</div>

                <div className="font-bold">Initial</div>
                <div>{bond.initialValue}</div>

                <div className="font-bold">Maturity</div>
                <div>{bond.maturityInMonths} months</div>

                <div className="font-bold">Target</div>
                <div>{bond.targetValue}</div>
            </div>
        </div>
    );
}
