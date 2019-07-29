import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ListingService } from '../../services/index'
import { Listing } from 'src/app/models';
import { NavController, AlertController } from '@ionic/angular'
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class detailsPage implements OnInit{
  listing: Listing = new Listing();
  booking: Booking = new Booking();

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private listingService: ListingService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.listingId))
    .subscribe(params => {
      this.listing.id = params.listingId;
    });

  this.getById()
  }

  navTo(dest) {
    console.log(dest)
    this.navCtrl.navigateForward([dest], 
      {queryParams: 
        {listingId: this.listing.id}
      });
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

  getById() {
    this.listingService.getById(this.listing.id)
    .then((res: Listing) => (this.listing = res))
    .catch(err => this.presentAlert("Listing", err.error))
  }
}
