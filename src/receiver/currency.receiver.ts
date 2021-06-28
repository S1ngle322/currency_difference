import {HttpService, Injectable} from "@nestjs/common";
import {Endpoints} from "../endpoints/endpoints";
import {BinanceResponse} from "../responses/binance.response";
import {OkexExchangeResponse} from "./OkexResponse";


@Injectable()
export class CurrencyReceiver {
    constructor(private readonly httpService: HttpService) {}


    public async getBinanceCurrency() {
        return await this.makeGetRequest<BinanceResponse>(Endpoints.BinanceBTC);
    }

    public async getOkeXExchange() {
        return await this.makeGetRequest<OkexExchangeResponse>(Endpoints.OKEX_BTC);
    }


    private async makeGetRequest<T>(url: string): Promise<T> {
        try{
            const { data } =  await this.httpService.get<T>(url).toPromise();
            return data;
        }catch (e) {
            console.log(e);
        }
    }

}