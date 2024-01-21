"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const book_schema_1 = require("./books/book.schema");
const book_controller_1 = require("./books/book.controller");
const books_service_1 = require("./books/books.service");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const user_schema_1 = require("./users/user.schema");
const userbooks_controller_1 = require("./userbooks/userbooks.controller");
const userbooks_service_1 = require("./userbooks/userbooks.service");
const userbooks_module_1 = require("./userbooks/userbooks.module");
const userbook_schema_1 = require("./userbooks/userbook.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/book_library'),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: book_schema_1.Book.name,
                    schema: book_schema_1.BookSchema,
                },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: userbook_schema_1.Userbook.name, schema: userbook_schema_1.UserbookSchema },
            ]),
            users_module_1.UsersModule,
            userbooks_module_1.UserbooksModule,
        ],
        controllers: [
            app_controller_1.AppController,
            book_controller_1.BookController,
            users_controller_1.UsersController,
            userbooks_controller_1.UserbooksController,
        ],
        providers: [app_service_1.AppService, books_service_1.BooksService, users_service_1.UsersService, userbooks_service_1.UserbooksService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map