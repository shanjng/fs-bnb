import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new User();
  public email: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
  }

  login() {
    const authUser = {
      email: this.email,
      password: this.password
    }
    this.authService.login(authUser).then((res: User) => {

      const testId = localStorage.getItem('userid');
      console.log(testId);

      this.router.navigate(['dashboard'], {
        queryParams: {
          // puts id (res-ponse) in the URL ?user=userid
          user: res.id
        }
      }); 
    }).catch(err => {
      console.log(err);
    })
  }
}
