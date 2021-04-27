import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: Bookmark[] = [
    new Bookmark('Wikipedia', 'http://wikipedia.org'),
    new Bookmark('Youtube', 'http://youtube.com'),
    new Bookmark('Google', 'http://google.com'),
  ];
  constructor() { }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find( bookmark => bookmark.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  updateBookmark(id: string, updatedBookmarkFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updatedBookmarkFields);
  }

  deleteBookmark(id: string) {
    const index = this.bookmarks.findIndex( bookmark => bookmark.id === id);
    if(index == -1) return;
    this.bookmarks.splice(index,1);
  }
}
