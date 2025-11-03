import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import type { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookMarkDto } from './dto/get-bookmark-dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}
  @Get()
  find(@Query() getBookMarkDto: GetBookMarkDto): Bookmark[] {
    if (Object.keys(getBookMarkDto).length) {
      return this.bookmarksService.find(getBookMarkDto);
    }

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
  @Delete('/:id')
  deleteBookmark(@Param('id') id: string): void {
    return this.bookmarksService.deleteBokmark(id);
  }
  @Patch('/:id/description')
  updateBookMarkDescription(
    @Param('id')
    id: string,
    @Body('description') description: string,
  ): Bookmark | undefined {
    return this.bookmarksService.updateBookMarkDescription(id, description);
  }
}
