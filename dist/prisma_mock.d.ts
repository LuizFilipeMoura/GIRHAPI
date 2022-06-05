import { PrismaClient } from '@prisma/client';
declare const prismaMock: PrismaClient<{
    datasources: {
        db: {
            url: string;
        };
    };
}, never, false>;
export default prismaMock;
