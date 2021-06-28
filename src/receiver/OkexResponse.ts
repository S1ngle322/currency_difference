export interface OkexResponse {
    symbol: string;
    usd_price: string
    exchange: string
}

export interface OkexExchangeResponse {
    data: OkexResponse[];
}