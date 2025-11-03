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
exports.BookmarksController = void 0;
const common_1 = require("@nestjs/common");
const bookmarks_service_1 = require("./bookmarks.service");
const create_bookmark_dto_1 = require("./dto/create-bookmark.dto");
const get_bookmark_dto_1 = require("./dto/get-bookmark-dto");
let BookmarksController = class BookmarksController {
    bookmarksService;
    constructor(bookmarksService) {
        this.bookmarksService = bookmarksService;
    }
    find(getBookMarkDto) {
        if (Object.keys(getBookMarkDto).length) {
            return this.bookmarksService.find(getBookMarkDto);
        }
        return this.bookmarksService.findAll();
    }
    findById(id) {
        return this.bookmarksService.findById(id);
    }
    createBookmark(createBookmarkDto) {
        return this.bookmarksService.createBookmark(createBookmarkDto);
    }
    deleteBookmark(id) {
        return this.bookmarksService.deleteBokmark(id);
    }
    updateBookMarkDescription(id, description) {
        return this.bookmarksService.updateBookMarkDescription(id, description);
    }
};
exports.BookmarksController = BookmarksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_bookmark_dto_1.GetBookMarkDto]),
    __metadata("design:returntype", Array)
], BookmarksController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BookmarksController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bookmark_dto_1.CreateBookmarkDto]),
    __metadata("design:returntype", Object)
], BookmarksController.prototype, "createBookmark", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookmarksController.prototype, "deleteBookmark", null);
__decorate([
    (0, common_1.Patch)('/:id/description'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], BookmarksController.prototype, "updateBookMarkDescription", null);
exports.BookmarksController = BookmarksController = __decorate([
    (0, common_1.Controller)('bookmarks'),
    __metadata("design:paramtypes", [bookmarks_service_1.BookmarksService])
], BookmarksController);
//# sourceMappingURL=bookmarks.controller.js.map