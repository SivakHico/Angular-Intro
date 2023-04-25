import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  title: string = 'First Post from Child Components'
  toPostList: string = 'this massage to post list we just CREAED IT'
  messageFromPostList: string
  outputMessageToParent: string
  lastName: string

  @Input() fromParent1: string;
  @ViewChild(PostListComponent) viewPostList;

  constructor() {
    console.log(`post List ${this.viewPostList}`)
  }

  ngAfterViewInit() {
    console.log(`post List ${this.viewPostList.toPost}`)
    this.messageFromPostList = this.viewPostList.toPost
  }

  reciveMessage($event) {
    this.outputMessageToParent = $event
    console.log($event + ' event')
  }

  submitForm(username) {
    console.log('submit ' + username)
  }

  saveValue() {
    console.log(this.lastName)
  }

  ngOnInit(): void {

  }
}
