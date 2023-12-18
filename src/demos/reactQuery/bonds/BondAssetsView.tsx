import { useQuery } from '@tanstack/react-query';
import { BondAsset } from '../../../types';
import { fetchJsonThrowingErrors } from '../utils/fetch-utils';
import BondAssetView from './BondAssetView';

export default function BondAssetsView() {
    const {
        data,
        isError,
        error,
        isFetching,
    }: {
        data: BondAsset[] | undefined;
        isError: boolean;
        error: any;
        isFetching: any;
    } = useQuery({
        queryKey: ['bonds'],
        queryFn: () => fetchJsonThrowingErrors<BondAsset[]>('/api/bonds', { method: 'GET' }),
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

    const bondElements =
        data.map((bondAsset: BondAsset) => <BondAssetView key={bondAsset.id} bond={bondAsset} />) || [];
    return <>{bondElements}</>;
}
