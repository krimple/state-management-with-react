import { Provider } from "react-redux";
import FinancialAssets from "./FinancialAssets.tsx";
import { store } from "./store/create-store.ts";

export default function FinancialAssetsWithRedux() {
  return (
    <Provider store={store}>
      <FinancialAssets />
    </Provider>
  );
}
