import { Bookmark } from './bookmark.model';
export declare class BookmarksService {
    private bookmarks;
    findAll(): Bookmark[];
    createBookmark(url: string, description: string): Bookmark;
}
