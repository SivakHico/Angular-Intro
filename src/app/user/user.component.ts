import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string
  email: string
  message: string
  userInfo: Array<any> = []

  save() {
    this.userInfo.push({
      name: this.name,
      email: this.email,
      message: this.message
    })
    console.log(this.userInfo)
  }

  removeUser(index) {
    this.userInfo.splice(index, 1)
  }
}
