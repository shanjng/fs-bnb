import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/index'
import { NavController, AlertController } from '@ionic/angular'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authUser: User = new User();

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertCtrl: AlertController
  ) { 

  }

  ngOnInit() {
  }

  async presentAlert(source, err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Problem with ' + source,
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
    this.authService.login(this.authUser).then(res => {

      const testId = localStorage.getItem('userid');
      console.log(testId);

      this.navCtrl.navigateForward('main/tabs/explore'); 
    }).catch(err => {
      this.presentAlert("Login", err.error);
    })
  }
}
