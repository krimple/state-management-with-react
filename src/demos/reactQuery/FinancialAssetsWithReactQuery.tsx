import FinancialAssets from "./FinancialAssets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function FinancialAssetsWithReactQuery() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FinancialAssets />
    </QueryClientProvider>
  );
}
