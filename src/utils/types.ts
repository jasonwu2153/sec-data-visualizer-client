export interface SecCompany {
    cik: string;
    name: string;
    created_at: string;
}

export interface HoldingPieData {
    name: string;
    balance: number;
    val_usd: number;
}

export interface TopData {
    balance: number;
    val_usd: number;
    isin: string;
    lei: string;
    name: string;
    units: string;
}
