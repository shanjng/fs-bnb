import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController } from '@ionic/angular'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public authUser: User = new User()

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertCtrl: AlertController
  ) { }

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

  register() {
    this.authService.register(this.authUser).then(res => {

      const testId = localStorage.getItem('userid');
      console.log(testId);

      this.navCtrl.navigateForward('main/existing')
    }).catch(err => {
      this.presentAlert("Registration", err.error);
    })
  }  

}
