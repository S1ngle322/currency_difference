export interface BinanceResponse {
    symbol: string;
    price: number;
}

export interface BinanceBTCResponse {
    price: BinanceResponse[];
}