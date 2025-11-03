import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
export declare class BookmarksService {
    private bookmarks;
    findAll(): Bookmark[];
    findById(id: string): Bookmark | undefined;
    createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark;
}
