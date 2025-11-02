import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import type { Bookmark } from './bookmark.model';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}
  @Get()
  findAll(): Bookmark[] {
    return this.bookmarksService.findAll();
  }
  @Post()
  createBookmark(
    @Body('url') url: string,
    @Body('description') description: string,
  ): Bookmark {
    return this.bookmarksService.createBookmark(url, description);
  }
}
