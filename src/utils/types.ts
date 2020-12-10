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

export interface PieData {
    name: string;
    value: number;
}

export interface TopData {
    balance: number;
    val_usd: number;
    isin: string;
    lei: string;
    name: string;
    units: string;
}

export interface PopularHoldingData {
    held_by: number;
    lei: string;
    name: string;
    title: string;
}
