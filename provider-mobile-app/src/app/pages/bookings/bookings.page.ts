import { Component, OnInit } from '@angular/core';
import { Listing, Booking } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BookingService } from '../../services/index'
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  listing: Listing = new Listing();
  bookings: Booking[];

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.listingId))
    .subscribe(params => {
      this.listing.id = params.listingId;
    });

    this.getByListingId()
  }

  navToListing() {
    this.navCtrl.navigateForward(['details'], {
      queryParams: {
        listingId: this.listing.id
      }
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

  getByListingId() {
    this.bookingService.getByListingId(this.listing.id)
    .then((res: Booking[]) => (this.bookings = res))
    .catch(err => this.presentAlert("Bookings", err.error))
  }

  accept() {

  }

  updateStatus(bookingId, status) {
    this.bookingService.updateStatus(bookingId, status)
    .then(res => {console.log(res); window.location.reload()})
    .catch(err => this.presentAlert("Bookings", err.error))
  }  
}
