import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

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
  users: Array<any> = []
  data: Array<any> = [{ id: 66, name: "fcuk" }]

  constructor(private userService: UserService) {
    this.users = userService.userList
  }

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

  addUser() {
    this.userService.addNewUser(this.data)
  }
}
