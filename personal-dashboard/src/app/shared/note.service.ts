import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy{

  notes: Note[] = [];

  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    // listening to localstorage changes
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if(event.key === 'notes') this.loadState();
    })
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find( note => note.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updateFields);
    this.saveState();
  }

  deleteNote(id: String) {
    const noteIndex = this.notes.findIndex( note => note.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex,1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadState() {
    try {
      const notesInStorage = JSON.parse(localStorage.getItem('notes'));
      const notesFromStorage = notesInStorage === null ? [] : notesInStorage;
      this.notes.length = 0;
      this.notes.push(...notesFromStorage);
    } catch(e) {
      console.log('There was an error retrieving the notes from localstorage!!');
      console.warn(e.message)
    }
  }
}
