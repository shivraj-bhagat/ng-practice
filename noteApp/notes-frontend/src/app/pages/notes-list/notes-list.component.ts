import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  
  constructor() { }

  ngOnInit(): void {
    // reterive all note service
  }

}
