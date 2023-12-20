import Button from '../../../components/Button';
import NumberFormatter from '../../../components/NumberFormatter';
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
                <div>
                    <NumberFormatter value={bond.initialValue} currency={true} />
                </div>

                <div className="font-bold">Maturity</div>
                <div>
                    <NumberFormatter value={bond.maturityInMonths} /> mo
                </div>

                <div className="font-bold">Target</div>
                <div>
                    <NumberFormatter value={bond.targetValue} currency={true} />
                </div>
            </div>
        </div>
    );
}
