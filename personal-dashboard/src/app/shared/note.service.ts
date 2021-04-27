import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('new title', 'new content!'),
    new Note('new title', 'new content!')
  ] 
  constructor() { }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find( note => note.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updateFields)
  }

  deleteNote(id: String) {
    const noteIndex = this.notes.findIndex( note => note.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex,1);
  }
}
