"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRefactor1706308382883 = void 0;
class CoffeeRefactor1706308382883 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }
}
exports.CoffeeRefactor1706308382883 = CoffeeRefactor1706308382883;
//# sourceMappingURL=1706308382883-CoffeeRefactor.js.map