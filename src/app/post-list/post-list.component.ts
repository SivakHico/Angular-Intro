import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  toPost: string = 'This message to my Post Parent'
  eventMessage: string = 'Hiiii Evento I Clicked'
  condition: boolean = true

  @Input() fromPost: string

  @Output() outputMessage = new EventEmitter<string>()

  clickMessage() {
    this.outputMessage.emit(this.eventMessage)
    console.log('clicked')
  }
}
