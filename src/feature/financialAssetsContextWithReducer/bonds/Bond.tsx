import { BondAssetType } from '../../../types';

type BondProps = {
  bond: BondAssetType
}
export default function Bond({bond}: BondProps) {

  return (
     <p>
      Bond: {bond.issuingAgency} - Series {bond.bondSeries} - {bond.initialValue} for {bond.maturityInMonths} months = {bond.targetValue}
    </p>
  )

}
