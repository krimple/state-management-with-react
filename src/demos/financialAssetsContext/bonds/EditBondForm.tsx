import { ChangeEvent, FormEvent, useState } from 'react';
import { saveBond } from '../../../apis';
import Button from '../../../components/Button';
import { BondAsset } from '../../../types';
import useFinancialAssets from '../hooks/useFinancialAssets';

interface EditBondFormProps {
    bond: BondAsset;
    onClose: () => void;
}
export default function EditBondForm({ bond: originalBondData, onClose }: EditBondFormProps) {
    const { fetchAssets } = useFinancialAssets();
    const [bondData, setBondData] = useState<BondAsset>(originalBondData);

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
            await saveBond(bondData);
            fetchAssets();
            onClose();
        } catch (e) {
            alert('Save failed. Check log.');
            console.error(e);
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
                step={0.01}
                name="initialValue"
                defaultValue={bondData.initialValue}
                onChange={handleChange}
            />

            <label htmlFor="targetValue">Target Value</label>
            <input
                type="number"
                min={1}
                step={0.01}
                name="targetValue"
                defaultValue={bondData.targetValue}
                onChange={handleChange}
            />

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
