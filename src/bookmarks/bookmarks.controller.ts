import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import type { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}
  @Get()
  findAll(): Bookmark[] {
    return this.bookmarksService.findAll();
  }
  @Get('/:id')
  findById(@Param('id') id: string): Bookmark | undefined {
    return this.bookmarksService.findById(id);
  }
  // @Post()
  // createBookmark(
  //   @Body('url') url: string,
  //   @Body('description') description: string,
  // ): Bookmark {
  //   return this.bookmarksService.createBookmark(url, description);
  // }
  //OR use DTO

  @Post()
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarksService.createBookmark(createBookmarkDto);
  }
}
