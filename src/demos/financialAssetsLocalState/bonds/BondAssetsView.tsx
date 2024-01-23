import { getBonds } from '@/apis';
import { BondAsset } from '@/types';
import { useCallback, useEffect, useState } from 'react';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    const [bonds, setBonds] = useState<BondAsset[]>([]);

    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);

    const loadData = useCallback(async () => {
        setBonds(await getBonds());
    }, []);

    const bondElements = bonds.map((bondEntry) => (
        <BondAssetView key={bondEntry.id} bond={bondEntry} onUpdated={loadData} />
    ));

    return <>{bondElements}</>;
}
