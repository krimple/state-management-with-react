import { useEffect, useState } from 'react';
import { getBonds } from '../../../apis/get-assets';
import { BondAsset } from '../../../types';
import Bond from './Bond';

export default function BondView() {
    const [bonds, setBonds] = useState<BondAsset[]>([]);

    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);

    async function loadData() {
        setBonds(await getBonds());
    }

    const bondElements = bonds.map((bondEntry) => <Bond key={bondEntry.id} bond={bondEntry} onUpdated={loadData} />);

    return <>{bondElements}</>;
}
