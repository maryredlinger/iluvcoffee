"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("typeorm");
class DatabaseModule {
    static register(options) {
        return {
            module: DatabaseModule,
            providers: [
                {
                    provide: 'CONNECTION',
                    useValue: new typeorm_1.DataSource(options),
                },
            ],
        };
    }
}
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map