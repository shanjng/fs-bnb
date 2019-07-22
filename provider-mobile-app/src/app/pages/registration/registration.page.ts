import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public firstName: string;
  public lastName: string;
  public cellPhone: string;
  public email: string;
  public password: string;
  public role: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertCtrl: AlertController
  ) { }

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

  register() {
    console.log(this.role)
    const authUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      cellPhone: this.cellPhone,
      email: this.email,
      password: this.password,
      role: this.role
    }
    this.authService.register(authUser).then(res => {

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
