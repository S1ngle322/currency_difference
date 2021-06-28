import {CurrencyReceiver} from "../receiver/currency.receiver";
import {Injectable} from "@nestjs/common";


@Injectable()
export class AppService{

    constructor(private readonly currencyReceiver: CurrencyReceiver) {}


    public async entryPoint() {
        const binance = await this.binanceExchange();

        const okex = await this.OkeXExchange();


        const tuple = [ {'Binance': binance}, {'Okex': okex}];

        return tuple;
    }


    public async OkeXExchange() {
        const data = await this.currencyReceiver.getOkeXExchange();
        // const newData = data.data.map(({symbol, usd_price, exchange}) => ({
        //     symbol,
        //     usd_price,
        //     exchange
        // }));
        return data.data;
    }

    public async binanceExchange() {
        const data = await this.currencyReceiver.getBinanceCurrency();
        return data.price
    }

}