import {Controller, Get} from "@nestjs/common";
import {AppService} from "../service/app.service";


@Controller()
export class AppController{

  constructor(private readonly currencyService: AppService) {
  }

  @Get('/api/get-all')
  public async getAll(){
    return await this.currencyService.entryPoint();
  }
}