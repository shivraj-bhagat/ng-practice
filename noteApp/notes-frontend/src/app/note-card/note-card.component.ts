import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() body: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // console.log(this.truncator.nativeElement);
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
    // console.log(viewableHeight,this.bodyText.nativeElement.scrollHeight)
    if(this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // show fade out
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  onXButtonClick() {
    this.deleteEvent.emit();
  }
}
