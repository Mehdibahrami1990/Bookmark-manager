/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookMarkDto } from './dto/get-bookmark-dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { id: uuid(), description: 'NestJS Docs', url: 'https://docs.nestjs.com' },
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      id: uuid(),
      description: 'TypeScript',
      url: 'https://www.typescriptlang.org',
    },
  ];
  findAll(): Bookmark[] {
    return this.bookmarks;
  }
  find(getBookMarkDto: GetBookMarkDto): Bookmark[] {
    let bookmarks = this.findAll();
    const { url, description } = getBookMarkDto;

    if (url) {
      bookmarks = bookmarks.filter((bookmark) =>
        bookmark.url.toLowerCase().includes(url),
      );
    }
    if (description) {
      bookmarks = bookmarks.filter((bookmark) =>
        bookmark.description.toLowerCase().includes(description),
      );
    }
    return bookmarks;
  }

  findById(id: string): Bookmark | undefined {
    return this.bookmarks.find((bookmark) => bookmark.id == id);
  }
  createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark {
    const { url, description } = createBookmarkDto;

    const bookmark: Bookmark = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      id: uuid(),
      url,
      description,
    };
    this.bookmarks.push(bookmark);
    return bookmark;
  }
  deleteBokmark(id: string): void {
    this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
  }
  updateBookMarkDescription(
    id: string,
    description: string,
  ): Bookmark | undefined {
    const bookmark = this.findById(id);
    // if (!bookmark) return undefined;
    bookmark!.description = description;
    return bookmark;
  }
}
