import { BookmarksService } from './bookmarks.service';
import type { Bookmark } from './bookmark.model';
export declare class BookmarksController {
    private bookmarksService;
    constructor(bookmarksService: BookmarksService);
    findAll(): Bookmark[];
    createBookmark(url: string, description: string): Bookmark;
}
