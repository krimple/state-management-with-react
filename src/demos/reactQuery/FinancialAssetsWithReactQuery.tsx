import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FinancialAssets from './FinancialAssets';

export default function FinancialAssetsWithReactQuery() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <h3>Using TanStack React Query</h3>
            <FinancialAssets />
        </QueryClientProvider>
    );
}
