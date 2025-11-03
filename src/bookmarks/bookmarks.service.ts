/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

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
}
