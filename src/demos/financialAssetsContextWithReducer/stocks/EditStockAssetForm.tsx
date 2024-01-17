import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import { StockAsset } from '../../../types';
import { doLoadData, doSaveStock } from '../financial-assets-reducer';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer';

interface EditStockFormProps {
    stock: StockAsset;
    onClose: () => void;
}
export default function EditStockAssetForm({ stock: initialStockData, onClose }: EditStockFormProps) {
    const [stockData, setStockData] = useState<StockAsset>(initialStockData);
    const { dispatch } = useFinancialAssetsContext();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        switch (event.target.name) {
            case 'ticker':
                setStockData((state: StockAsset) => {
                    return { ...state, ticker: event.target.value };
                });
                break;
            case 'basisCost':
                setStockData((state: StockAsset) => {
                    return { ...state, basisCost: Number.parseFloat(event.target.value) };
                });
                break;
            case 'currentValue':
                setStockData((state: StockAsset) => {
                    return {
                        ...state,
                        currentValue: Number.parseFloat(event.target.value),
                    };
                });
                break;
            case 'description':
                setStockData((state: StockAsset) => {
                    return { ...state, description: event.target.value };
                });
                break;
            default:
                return;
        }
    }
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            await doSaveStock(stockData, dispatch);
            await doLoadData(dispatch);
            onClose();
        } catch (e) {
            alert(
                'Update failed. If I were a toast system you would like me. Check the logs in your browser and json-server'
            );
        }
    }

    return (
        <form className="grid-form" onSubmit={handleSubmit}>
            <label htmlFor="ticker">Ticker</label>
            <input type="text" name="ticker" defaultValue={stockData.ticker} onChange={handleChange} />

            <label htmlFor="basisCost">Cost Basis</label>
            <input
                type="number"
                name="basisCost"
                min={1}
                step={0.01}
                defaultValue={stockData.basisCost}
                onChange={handleChange}
            />

            <label htmlFor="currentValue">Current Value</label>
            <input
                type="number"
                name="currentValue"
                min={1}
                step={0.01}
                defaultValue={stockData.currentValue}
                onChange={handleChange}
            />

            <label htmlFor="description">Info</label>
            <input type="text" name="description" defaultValue={stockData.description} onChange={handleChange} />

            <Button label="Cancel" type="button" onClick={onClose} />
            <Button label="Save" type="submit" />
        </form>
    );
}
