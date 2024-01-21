"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserbooksModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const userbooks_controller_1 = require("./userbooks.controller");
const userbooks_service_1 = require("./userbooks.service");
const userbook_schema_1 = require("./userbook.schema");
let UserbooksModule = class UserbooksModule {
};
exports.UserbooksModule = UserbooksModule;
exports.UserbooksModule = UserbooksModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: userbook_schema_1.Userbook.name, schema: userbook_schema_1.UserbookSchema }])],
        controllers: [userbooks_controller_1.UserbooksController],
        providers: [userbooks_service_1.UserbooksService],
    })
], UserbooksModule);
//# sourceMappingURL=userbooks.module.js.map