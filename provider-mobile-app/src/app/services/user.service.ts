import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // Dependency Injection!!???
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) { }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.BaseURL + "/api/user/")
        .subscribe(
          (response) => {
            this.navCtrl.navigateForward("main/tabs/explore")
            resolve(response)
          },
          (err) => {
            console.log(err.error.message);
            reject(err)
          }
        )
    })
  }
}
