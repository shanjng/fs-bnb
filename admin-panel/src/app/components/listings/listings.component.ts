import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/index'
import { Listing } from '../../models/listing.model'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  listings: Listing[]

  constructor(
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.getAll()
  }

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data: [75, 59, 30, 81, 56, 55, 50], label: 'Series A'},
    {data: [28, 48, 60, 19, 86, 27, 32], label: 'Series B'}
  ];

  getAll() {
    this.listingService.getAll()
    .then(
      (res: Listing[]) => (this.listings = res)
    )
    .catch(err => console.log(err))
  }
}
