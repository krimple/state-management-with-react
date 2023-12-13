import Cash from './Cash';
import { CashAsset } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { fetchJsonThrowingErrors } from '../utils/fetch-utils.ts';

export default function CashView() {
  const {data, isError, error, isFetching}: {data: CashAsset[] | undefined, isError: boolean, error: any, isFetching: any} = useQuery({
    queryKey: ['cash'],
    queryFn: () => fetchJsonThrowingErrors<CashAsset[]>('/api/cash', { method: 'GET'}),
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

  const cashElements = data.map((cashAsset: CashAsset) =>
    (<Cash key={cashAsset.id} cash={cashAsset}/>)) || [];

  return (
    <>
      { cashElements }
    </>
  )
}
