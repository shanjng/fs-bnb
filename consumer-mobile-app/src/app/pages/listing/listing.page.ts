import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ListingService } from '../../services/index'
import { Listing } from 'src/app/models';
import { AlertController } from '@ionic/angular'
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  listing: Listing = new Listing();
  booking: Booking = new Booking();
  dateTo: string;
  dateFrom: string;
  
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
        filter(params => params.listingId))
      .subscribe(params => {
        this.listing.id = params.listingId;
      });

    this.getById()
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

  async presentStatus(status) {
    const alert = await this.alertCtrl.create({
      header: 'Booking Status: ' + status,
      buttons: ['OK']
    });

    await alert.present();
  }

  getById() {
    this.listingService.getById(this.listing.id)
    .then((res: Listing) => (this.listing = res))
    .catch(err => this.presentAlert("Listing", err.error))
  }

  createBooking() {
    this.booking.userId = parseInt(localStorage.getItem("userid"));
    this.booking.listingId = parseInt(this.listing.id);
    this.booking.dateTo = this.dateTo.slice(0,10);
    this.booking.dateFrom = this.dateFrom.slice(0,10);

    this.listingService.create(this.booking)
    .then((res: Booking) => {this.presentStatus("Success")})
    .catch(err => this.presentAlert("Booking", err.error))
  }
}
