import { BookmarksService } from './bookmarks.service';
import type { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookMarkDto } from './dto/get-bookmark-dto';
export declare class BookmarksController {
    private bookmarksService;
    constructor(bookmarksService: BookmarksService);
    find(getBookMarkDto: GetBookMarkDto): Bookmark[];
    findById(id: string): Bookmark | undefined;
    createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark;
    deleteBookmark(id: string): void;
    updateBookMarkDescription(id: string, description: string): Bookmark | undefined;
}
