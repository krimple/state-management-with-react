import { useEffect, useState } from 'react';
import { getStocks } from '../../../apis';
import { StockAsset } from '../../../types';
import StockAssetView from './StockAssetView';

/**
 * A component to display an editable list of all stock assets
 *
 * @constructor
 */
export default function StockAssetsView() {
    // component state - the list of stocks. Each stock is sent as a read-only prop
    // to the StockAssetView component below
    const [stocks, setStocks] = useState<StockAsset[]>([]);

    // Load the data for all stocks
    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);

    // this is used for both loading the original stock list and
    // refreshing once a stock component has been
    // edited.
    async function loadData() {
        setStocks(await getStocks());
    }

    // Generate our stock components from the collection of stocks returned
    const stockElements = stocks.map((stockEntry) => (
        <StockAssetView key={stockEntry.id} stock={stockEntry} onUpdated={loadData} />
    ));

    // now render the stocks
    return <>{stockElements}</>;
}
