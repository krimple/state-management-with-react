export type StockAssetType = {
  ticker: string;
  basisCost: number;
  description: string;
};

export type BondAssetType = {
  issuingAgency: string;
  bondSeries: string;
  initialValue: number;
  targetValue: number;
  maturityInMonths: number;
};

export type CashAssetType = {
  accountType: string;
  accountNumber: string;
  value: number;
};

