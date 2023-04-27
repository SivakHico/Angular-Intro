import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<any> = [
    { id: 1, name: "sevo" },
    { id: 2, name: "sami" },
    { id: 3, name: "Solomon" },
    { id: 4, name: "Sajida" }
  ]

  constructor() { }

  addNewUser(data) {
    this.userList.push(data)
  }
}
