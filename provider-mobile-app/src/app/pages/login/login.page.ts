import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/index'
import { NavController } from '@ionic/angular'
import { User } from '../../models/index'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user = new User();
  public email: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertCtrl: AlertController
  ) { 

  }

  ngOnInit() {
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Problem with Login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  navTo(dest) {
    console.log(dest)
    this.navCtrl.navigateForward(dest);
  }

  login() {
    console.log("login consumer")
    const authUser = {
      email: this.email,
      password: this.password
    }
    this.authService.login(authUser).then(res => {

      const testId = localStorage.getItem('userid');
      console.log(testId);

      this.navCtrl.navigateForward('main/tabs/tab1', {
        queryParams: {
          // puts id (res-ponse) in the URL ?user=userid
          user: res
        }
      }); 
    }).catch(err => {
      this.presentAlert(err);
    })
  }
}
