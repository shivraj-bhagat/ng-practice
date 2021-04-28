import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements OnDestroy {
  bookmarks: Bookmark[] = [];
  storageListenSub: Subscription;
  constructor() {
    this.loadState();

    // listening to localstorage changes
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if(event.key === 'bookmarks') this.loadState();
    })
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find( bookmark => bookmark.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  updateBookmark(id: string, updatedBookmarkFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updatedBookmarkFields);
    this.saveState();
  }

  deleteBookmark(id: string) {
    const index = this.bookmarks.findIndex( bookmark => bookmark.id === id);
    if(index == -1) return;
    this.bookmarks.splice(index,1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  loadState() {
    try {
      const bookmarksInStorage = JSON.parse(localStorage.getItem('bookmarks'), (key, value) => {
        if(key == 'url') return new URL(value);
        return value;
      });
      const bookmarksFromStorage = bookmarksInStorage === null ? [] : bookmarksInStorage;
      this.bookmarks.length = 0;
      this.bookmarks.push(...bookmarksFromStorage);
    } catch(e) {
      console.log('There was an error retrieving the bookmarks from localstorage!!');
      console.warn(e.message)
    }
  }
}
