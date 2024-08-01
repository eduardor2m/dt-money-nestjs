import { PrismaService } from './prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createTransaction(data: CreateTransactionDTO): Promise<void>;
}
