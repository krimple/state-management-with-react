import { CashAssetType } from '../../../types';

type CashProps = {
  cash: CashAssetType
}

export default function Cash({cash}: CashProps) {
  return (
    <p>
      Cash in {''.concat('XXXXXX', cash.accountNumber.substring(-1, 5)) } : { cash.value } - Type : { cash.accountType }
    </p>
  )
}
