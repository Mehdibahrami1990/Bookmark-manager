"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarksService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BookmarksService = class BookmarksService {
    bookmarks = [
        { id: (0, uuid_1.v4)(), description: 'NestJS Docs', url: 'https://docs.nestjs.com' },
        {
            id: (0, uuid_1.v4)(),
            description: 'TypeScript',
            url: 'https://www.typescriptlang.org',
        },
    ];
    findAll() {
        return this.bookmarks;
    }
    find(getBookMarkDto) {
        let bookmarks = this.findAll();
        const { url, description } = getBookMarkDto;
        if (url) {
            bookmarks = bookmarks.filter((bookmark) => bookmark.url.toLowerCase().includes(url));
        }
        if (description) {
            bookmarks = bookmarks.filter((bookmark) => bookmark.description.toLowerCase().includes(description));
        }
        return bookmarks;
    }
    findById(id) {
        return this.bookmarks.find((bookmark) => bookmark.id == id);
    }
    createBookmark(createBookmarkDto) {
        const { url, description } = createBookmarkDto;
        const bookmark = {
            id: (0, uuid_1.v4)(),
            url,
            description,
        };
        this.bookmarks.push(bookmark);
        return bookmark;
    }
    deleteBokmark(id) {
        this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
    }
    updateBookMarkDescription(id, description) {
        const bookmark = this.findById(id);
        bookmark.description = description;
        return bookmark;
    }
};
exports.BookmarksService = BookmarksService;
exports.BookmarksService = BookmarksService = __decorate([
    (0, common_1.Injectable)()
], BookmarksService);
//# sourceMappingURL=bookmarks.service.js.map