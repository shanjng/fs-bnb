import { Component } from '@angular/core';
import { Listing } from '../../models/index'
import { ListingService } from '../../services/index'
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-new',
  templateUrl: 'new.page.html',
  styleUrls: ['new.page.scss']
})
export class newPage {
  listing = new Listing();
  imgUrl: string;

  constructor(
    private listingService: ListingService,
    private alertCtrl: AlertController
  ) {}

  async presentAlert(source, err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Problem with ' + source,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  create() {
    this.listing.providerId = localStorage.getItem("userid")
    this.listingService.create(this.listing, this.imgUrl)
    .then(res => {console.log(res); window.location.reload()} )
    .catch(err => this.presentAlert("New Listing", err.error))
  }
}
