import { useQuery } from '@tanstack/react-query';
import { CashAsset } from '../../../types';
import { fetchJsonThrowingErrors } from '../utils/fetch-utils';
import CashAccountView from './CashAccountView';

export default function CashAccountsView() {
    const {
        data,
        isError,
        error,
        isFetching,
    }: {
        data: CashAsset[] | undefined;
        isError: boolean;
        error: any;
        isFetching: any;
    } = useQuery({
        queryKey: ['cash'],
        queryFn: () => fetchJsonThrowingErrors<CashAsset[]>('/api/cash', { method: 'GET' }),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <pre>An error occurred: {error.message}</pre>;
    }

    if (!data) {
        return <p>No data.</p>;
    }

    const cashElements =
        data.map((cashAsset: CashAsset) => <CashAccountView key={cashAsset.id} cash={cashAsset} />) || [];

    return <>{cashElements}</>;
}
