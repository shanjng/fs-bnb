import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/index'
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavController, AlertController } from '@ionic/angular'

import { Listing } from 'src/app/models';

@Component({
  selector: 'app-update',
  templateUrl: 'update.page.html',
  styleUrls: ['update.page.scss']
})
export class updatePage implements OnInit {
  listing: Listing = new Listing();

  constructor(
    public navCtrl: NavController,
    public listingService: ListingService,
    public alertCtrl: AlertController,
    public route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.listingId))
    .subscribe(params => {
      this.listing.id = params.listingId;
    });
    this.getById()
  }

    async presentAlert(subheader, msg) {
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        subHeader: subheader,
        message:  msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    getById() {
      this.listingService.getById(this.listing.id)
      .then((res: Listing) => {
        this.listing = res;
      })
      .catch(err =>
        this.presentAlert("Problem with Update", err.error)
      )
    }

    update() {
      this.listingService.update(this.listing)
      .then(res => {
        window.location.reload()
        this.navCtrl.navigateForward('/details', {
          queryParams: {
            listingId: this.listing.id
          }
        });
      })
      .catch(err => this.presentAlert("Problem with Update", err.error))
    }

    delete() {
      this.listingService.delete(this.listing.id)
      .then(res => {
        this.presentAlert("Listing Update", "Listing Deleted")
        this.navCtrl.navigateForward('/main/existing')
      })
      .catch(err => this.presentAlert("Problem with Update", err.error))
    }
}
