import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AngIntro'
  massage: string = 'I am the Parent Component new one'
  newPost: string
  navPage: string = 'Enterooo Page'
  isActive: boolean = true

  postList: Array<string> = ['Post1', 'Post2', 'Post3', 'Post4', 'Post5',]

  postObject: Array<any> = [{ id: 1, name: 'sevo' }, { id: 2, name: 'simolich' }, { id: 3, name: 'xario' }, { id: 4, name: 'kilo' }, { id: 5, name: 'rivo' },]

  addPost() {
    this.postList.push(this.newPost)
  }

  removePost(index) {
    this.postList.splice(index, 1)
  }

  goPage(page) {
    this.navPage = page
  }
}
