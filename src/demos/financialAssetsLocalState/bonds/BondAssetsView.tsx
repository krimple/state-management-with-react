import { useEffect, useState } from 'react';
import { getBonds } from '../../../apis/get-assets';
import { BondAsset } from '../../../types';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    const [bonds, setBonds] = useState<BondAsset[]>([]);

    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);

    async function loadData() {
        setBonds(await getBonds());
    }

    const bondElements = bonds.map((bondEntry) => (
        <BondAssetView key={bondEntry.id} bond={bondEntry} onUpdated={loadData} />
    ));

    return <>{bondElements}</>;
}
