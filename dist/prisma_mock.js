"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prismaMock = new client_1.PrismaClient({
    datasources: {
        db: {
            url: 'mongodb+srv://tenmeetings:4QTSPDIUm2qrh5wE@tenmeetings.ytkqd.mongodb.net/TenMeetingsTEST?retryWrites=true&w=majority',
        },
    },
});
exports.default = prismaMock;
//# sourceMappingURL=prisma_mock.js.map