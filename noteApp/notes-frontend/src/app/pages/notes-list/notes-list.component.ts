import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      // entry animation
      transition('void => *',[
        // initial state of the item
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': '0',
          padding: 0
        }),
        // space animation
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          padding: '*'
        })),
        animate(70)
      ]),

      transition('* => void',[
        // first scale up
        animate(50, style({
          transform: 'scale(1.05)',
        })),

        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75,
        })),

        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
        })),

        animate('150ms ease-out', style({
          height: 0,
          padding: 0,
          'margin-bottom': '0'
        }))

      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], { optional: true })
      ])
    ])

  ]
})

export class NotesListComponent implements OnInit, AfterViewInit {

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();

  @ViewChild('filterInput') filterInputElRef: ElementRef<HTMLInputElement>;
  @ViewChild('messageBox', {static: true}) messageBox;
  constructor(private noteService: NotesService, private renderer: Renderer2) { }

  ngOnInit(): void {
    // reterive all note service
    this.notes = this.noteService.getAll();
    // this.filteredNotes = this.noteService.getAll();
    this.filter('');
  }

  ngAfterViewInit() {
    this.show(0);
  }

  deleteNote(note: Note) {
    let noteId = this.noteService.getId(note);
    this.noteService.delete(noteId);
    // console.log(this.filterInputElRef.nativeElement.value);
    this.filter(this.filterInputElRef.nativeElement.value);
    this.show(0);
  }

  generateNoteURL(note: Note) {
    let noteId = this.noteService.getId(note);
    return noteId;
  }

  filter(query: string) {
    query = query.toLowerCase().trim();

    let allResults: Note[] = new Array<Note>();
    // getting words
    let terms: string[] = query.split(" ");
    // remove dulicates
    terms = this.removeDuplicates(terms);
    terms.forEach( term => {
      let results: Note[] = this.relevantNotes(term);
      allResults = [...allResults, ...results];
    });

    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;
    this.show(query.length);

    // sort by relevent
    this.sortByRelevency(allResults);
  }

  removeDuplicates(arr: Array<any>): Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(elem => uniqueResults.add(elem));
    return Array.from(uniqueResults);
  }

  relevantNotes(query: string): Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if(note.title && note.title.toLowerCase().includes(query)) {
        return true;
      }

      if(note.body && note.body.toLowerCase().includes(query)) {
        return true;
      }

      return false;
    })
    return relevantNotes;
  }

  sortByRelevency(searchResults: Note[]) {
    // most relevent match
    // format key:value => note:id
    let noteCountObj: object = {};
    
    searchResults.forEach(note => {
      let noteId = this.noteService.getId(note);

      if(noteCountObj[noteId]) {
        noteCountObj[noteId] += 1;
      } else {
        noteCountObj[noteId] = 1;
      }
    })

    // console.log(noteCountObj);

    this.filteredNotes = this.filteredNotes.sort((a:Note, b:Note) => {
      let aId = this.noteService.getId(a);
      let bId = this.noteService.getId(b);

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];

      return bCount - aCount;
    })
  }

  show(flag) {
    if(this.notes.length == 0 && !flag) {
      this.messageBox.nativeElement.children[0].innerHTML = "Please add some notes";
      this.renderer.setStyle(this.messageBox.nativeElement, 'display', 'block');
    }else if(this.filteredNotes.length == 0 && flag) {
      this.messageBox.nativeElement.children[0].innerHTML = "Search result not found";
      this.renderer.setStyle(this.messageBox.nativeElement, 'display', 'block');
    }
     else {
      this.renderer.setStyle(this.messageBox.nativeElement, 'display', 'none');
    }
  }

}
