import { useEffect, useState } from 'react';
import { getBonds } from '../../../apis/get-assets';
import { BondAsset } from '../../../types';
import BondView from './BondView.tsx';

export default function BondsView() {
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
        <BondView key={bondEntry.id} bond={bondEntry} onUpdated={loadData} />
    ));

    return <>{bondElements}</>;
}
