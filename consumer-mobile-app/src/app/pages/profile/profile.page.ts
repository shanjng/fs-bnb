import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from "../../models/user.model"

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  public user: User

  constructor(
    private userService: UserService,
    
    ) {
      this.user = new User()
      this.user.id = localStorage.getItem("userid");

      this.userService.getById(this.user.id)
      .then((res: User) => {
        this.user = res
      })
      .catch(err => {
        console.log("err: ", err)
      })
  }
}
