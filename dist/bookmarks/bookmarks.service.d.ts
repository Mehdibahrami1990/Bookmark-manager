import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookMarkDto } from './dto/get-bookmark-dto';
export declare class BookmarksService {
    private bookmarks;
    findAll(): Bookmark[];
    find(getBookMarkDto: GetBookMarkDto): Bookmark[];
    findById(id: string): Bookmark | undefined;
    createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark;
    deleteBokmark(id: string): void;
    updateBookMarkDescription(id: string, description: string): Bookmark | undefined;
}
