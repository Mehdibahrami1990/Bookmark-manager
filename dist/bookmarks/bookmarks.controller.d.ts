import { BookmarksService } from './bookmarks.service';
import type { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
export declare class BookmarksController {
    private bookmarksService;
    constructor(bookmarksService: BookmarksService);
    findAll(): Bookmark[];
    findById(id: string): Bookmark | undefined;
    createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark;
}
