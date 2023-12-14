import { useFinancialAssetsContext } from "../useFinancialAssetsContextWithReducer.ts";
import Cash from "./Cash";
import { CashAsset, isCashAsset } from "../../../types";

export default function CashView() {
  const { assets } = useFinancialAssetsContext().state;
  const cashElements = assets

    .filter((a) => isCashAsset(a))
    .map((cashAsset) => (
      <Cash key={cashAsset.id} cash={cashAsset as CashAsset} />
    ));
  return <>{cashElements}</>;
}
