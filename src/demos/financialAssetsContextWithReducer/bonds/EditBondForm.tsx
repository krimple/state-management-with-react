import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import { BondAsset } from '../../../types';
import { doSaveAsset } from '../financial-assets-reducer';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';

interface EditBondFormProps {
    bond: BondAsset;
    onClose: () => void;
}
export default function EditBondForm({ bond: originalBondData, onClose }: EditBondFormProps) {
    const [bondData, setBondData] = useState<BondAsset>(originalBondData);
    const { dispatch } = useFinancialAssetsContext();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        switch (event.target.name) {
            case 'issuingAgency':
                setBondData((state: BondAsset) => {
                    return { ...state, issuingAgency: event.target.value };
                });
                break;
            case 'bondSeries':
                setBondData((state: BondAsset) => {
                    return { ...state, bondSeries: event.target.value };
                });
                break;
            case 'initialValue':
                setBondData((state: BondAsset) => {
                    return {
                        ...state,
                        initialValue: Number.parseFloat(event.target.value),
                    };
                });
                break;
            case 'targetValue':
                setBondData((state: BondAsset) => {
                    return {
                        ...state,
                        targetValue: Number.parseFloat(event.target.value),
                    };
                });
                break;
            case 'maturityInMonths':
                setBondData((state: BondAsset) => {
                    return {
                        ...state,
                        maturityInMonths: Number.parseInt(event.target.value),
                    };
                });
                break;
            default:
                break;
        }
    }
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            await doSaveAsset(bondData, dispatch);
            onClose();
        } catch (e) {
            alert(
                'Update failed. If I were a toast system you would like me. Check the logs in your browser and json-server'
            );
        }
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="issuingAgency">Issuing Agency</label>
            <input type="text" name="issuingAgency" defaultValue={bondData.issuingAgency} onChange={handleChange} />

            <label htmlFor="bondSeries">Bond Series</label>
            <input type="text" name="bondSeries" defaultValue={bondData.bondSeries} onChange={handleChange} />

            <label htmlFor="initialValue">Initial Value</label>
            <input
                type="number"
                min={1}
                name="initialValue"
                defaultValue={bondData.initialValue}
                onChange={handleChange}
            />

            <label htmlFor="targetValue">Target Value</label>
            <input type="number" name="targetValue" defaultValue={bondData.targetValue} onChange={handleChange} />

            <label htmlFor="maturityInMonths">Maturity (Months)</label>
            <input
                type="number"
                name="maturityInMonths"
                min={1}
                step={1}
                max={360}
                defaultValue={bondData.maturityInMonths}
                onChange={handleChange}
            />

            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
