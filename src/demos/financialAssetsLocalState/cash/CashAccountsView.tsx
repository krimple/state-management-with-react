import { useEffect, useState } from 'react';
import { getCash } from '../../../apis';
import { CashAsset } from '../../../types';
import CashAccountView from './CashAccountView';

export default function CashAssetsView() {
    const [cash, setCash] = useState<CashAsset[]>([]);
    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);

    async function loadData() {
        setCash(await getCash());
    }

    const cashElements = cash.map((cashEntry) => (
        <CashAccountView key={cashEntry.id} cash={cashEntry} onUpdated={loadData} />
    ));

    return <>{cashElements}</>;
}
