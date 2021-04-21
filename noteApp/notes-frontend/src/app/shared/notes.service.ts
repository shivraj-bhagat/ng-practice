import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  notes: Note[] = new Array<Note>();

  constructor() { }

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    // adds and return the index of note
    let newLength = this.notes.push(note);
    let index = newLength-1;
    return index;
  }

  update(id: number, title: string, body: string ) {
    this.notes[id].title = title;
    this.notes[id].body = body;
  }

  delete(id: number) {
    this.notes.splice(id,1);
  }

}
