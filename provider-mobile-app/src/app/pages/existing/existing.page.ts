import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/index'
import { NavController, AlertController } from '@ionic/angular'
import { Listing } from '../../models/index'

@Component({
  selector: 'app-existing',
  templateUrl: 'existing.page.html',
  styleUrls: ['existing.page.scss']
})
export class existingPage implements OnInit {
  public listings: Listing[];
  public imgUrls: string[];
  public imgUrl: string;

  constructor(
    public listingService: ListingService,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getByProviderId()
    // this.getImgUrl(1)
  }

  navToListing(id) {
    this.navCtrl.navigateForward(['details'], 
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

  getByProviderId() {
    this.listingService.getByProviderId(localStorage.getItem("userid"))
    .then((res: Listing[]) => {
      this.listings = res;
      // this.getImgUrls();
    })
    .catch(err =>
      this.presentAlert("Existing", err.error)
    )
  }
  
  getImgUrl(id) {
    this.listingService.getById(id) 
    .then((res: Listing) => {
      return res.imgUrl
    })
  }
}
