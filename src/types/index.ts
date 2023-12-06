export type StockAssetType = {
  id: number;
  ticker: string;
  basisCost: number;
  description: string;
};

export type BondAssetType = {
  id: number;
  issuingAgency: string;
  bondSeries: string;
  initialValue: number;
  targetValue: number;
  maturityInMonths: number;
};

export type CashAssetType = {
  id: number;
  accountType: string;
  accountNumber: string;
  value: number;
};

