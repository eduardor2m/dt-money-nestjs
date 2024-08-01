import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/transaction')
  async createTransaction(@Body()data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data)
  }
}
