import { useFinancialAssetsContext } from "../useFinancialAssetsContextWithReducer.ts";
import Bond from "./Bond";
import { BondAsset, isBondAsset } from "../../../types";

export default function BondsView() {
  const assets = useFinancialAssetsContext().state.assets;
  const bondAssets: BondAsset[] = assets.filter((a) =>
    isBondAsset(a),
  ) as BondAsset[];
  const bondElements = bondAssets.map((bondAsset: BondAsset) => (
    <Bond key={bondAsset.id} bond={bondAsset} />
  ));
  return <>{bondElements}</>;
}
