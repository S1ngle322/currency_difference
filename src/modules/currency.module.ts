import {HttpModule, Module} from "@nestjs/common";
import {AppController} from "../controller/app.controller";
import {AppService} from "../service/app.service";
import {CurrencyReceiver} from "../receiver/currency.receiver";

@Module({
    imports: [HttpModule],
    controllers: [AppController],
    providers: [AppService, CurrencyReceiver],


})

export class CurrencyModule{}