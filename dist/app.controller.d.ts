import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createTransaction(data: CreateTransactionDTO): Promise<void>;
}
