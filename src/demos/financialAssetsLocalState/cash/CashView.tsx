import { useEffect, useState } from 'react';
import { getCash } from '../../../apis/get-assets';
import { CashAsset } from '../../../types';
import Cash from './Cash';

export default function CashView() {
    const [cash, setCash] = useState<CashAsset[]>([]);
    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);

    async function loadData() {
        setCash(await getCash());
    }

    const cashElements = cash.map((cashEntry) => <Cash key={cashEntry.id} cash={cashEntry} onUpdated={loadData} />);

    return <>{cashElements}</>;
}
