import useEditing from '../../../hooks/editingHook';
import { BondAsset } from '../../../types';
import BondAssetDisplay from './BondAssetDisplay';
import EditBondForm from './EditBondForm';

type BondProps = {
    bond: BondAsset;
};
export default function BondAssetView({ bond }: BondProps) {
    const { isEditing, toggleEditing } = useEditing(false);

    return (
        <div className="asset-display-row">
            {!isEditing && <BondAssetDisplay bond={bond} toggleForm={toggleEditing} />}
            {isEditing && <EditBondForm bond={bond} onClose={toggleEditing} />}
        </div>
    );
}
