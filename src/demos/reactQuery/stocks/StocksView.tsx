import Stock from './Stock';
import { StockAsset } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { fetchJsonThrowingErrors } from '../utils/fetch-utils.ts';

export default function StocksView() {
  const {data, isError, error, isFetching}: {data: StockAsset[] | undefined, isError: boolean, error: any, isFetching: any} = useQuery({
    queryKey: ['stocks'],
    queryFn: () => fetchJsonThrowingErrors<StockAsset[]>('/api/stocks', { method: 'GET'}),
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <pre>An error occurred: {error.message}</pre>
  }

  if (!data) {
    return <p>No data.</p>
  }

  const stockElements = data.map((stockAsset: StockAsset) =>
    (<Stock key={stockAsset.id} stock={stockAsset}/>)) || [];

  return (
    <>
      { stockElements }
    </>
  )
}
