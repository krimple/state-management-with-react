import { ChangeEvent, FormEvent, useState } from 'react';
import { saveStock } from '../../../apis/save-asset';
import Button from '../../../components/Button';
import { StockAsset } from '../../../types';

interface EditStockFormProps {
    stock: StockAsset;
    onClose: () => void;
}

export default function EditStockAssetForm({ stock: originalStockData, onClose }: EditStockFormProps) {
    const [stockState, setFormState] = useState<StockAsset>(originalStockData);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormState((formState: StockAsset) => {
            return { ...formState, [event.target.name]: event.target.value };
        });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await saveStock(stockState);
        onClose();
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="ticker">Ticker</label>
            <input type="text" name="ticker" defaultValue={stockState.ticker} onChange={handleChange} />

            <label htmlFor="basisCost">Cost Basis</label>
            <input
                type="number"
                name="basisCost"
                min={1}
                step={0.01}
                defaultValue={stockState.basisCost}
                onChange={handleChange}
            />

            <label htmlFor="currentValue">Current Value</label>
            <input
                type="number"
                name="currentValue"
                min={1}
                step={0.01}
                defaultValue={stockState.currentValue}
                onChange={handleChange}
            />

            <label htmlFor="description">Info</label>
            <input type="text" name="description" defaultValue={stockState.description} onChange={handleChange} />

            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
