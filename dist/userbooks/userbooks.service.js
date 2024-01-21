"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserbooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const userbook_schema_1 = require("./userbook.schema");
let UserbooksService = class UserbooksService {
    constructor(userbookModel) {
        this.userbookModel = userbookModel;
    }
    async addToToBeReadList(bookTitle) {
        return await this.createOrUpdateUserBook(bookTitle, 'to-be-read');
    }
    async addToCurrentlyReadingList(bookTitle) {
        return await this.createOrUpdateUserBook(bookTitle, 'currently-reading');
    }
    async rateBook(_id, userbookDto) {
        const userbook = await this.userbookModel.findByIdAndUpdate(_id, userbookDto, { new: true });
        if (!userbook) {
            throw new common_1.NotFoundException('User book not found');
        }
        return userbook;
    }
    async createOrUpdateUserBook(bookTitle, status) {
        const userId = 'user_id';
        const existingUserbook = await this.userbookModel.findOne({ userId, bookTitle });
        if (existingUserbook) {
            existingUserbook.status = status;
            return existingUserbook.save();
        }
        const newUserbook = new this.userbookModel({ userId, bookTitle, status });
        return newUserbook.save();
    }
};
exports.UserbooksService = UserbooksService;
exports.UserbooksService = UserbooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(userbook_schema_1.Userbook.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserbooksService);
//# sourceMappingURL=userbooks.service.js.map