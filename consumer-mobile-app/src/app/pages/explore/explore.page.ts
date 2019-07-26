import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/index'
import { NavController, AlertController } from '@ionic/angular'
import { Listing } from '../../models/index'

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit {
  public listings: Listing[];

  constructor(
    public listingService: ListingService,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {
    
  }

  ngOnInit() {
    this.get()
  }

  navToListing(id) {
    this.navCtrl.navigateForward(['property'], 
      {queryParams: 
        {listingId: id}
      })
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

  get() {
    this.listingService.get()
    .then((res: Listing[]) => {
      console.log(res)
      this.listings = res;
    })
    .catch(err =>
      this.presentAlert("Explore", err.error)
    )
  }
}
