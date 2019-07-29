import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/index'
import { Booking } from '../../models/booking.model'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {  
  bookings: Booking[]

  constructor(
    private bookingService: BookingService
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
    {data: [65, 59, 30, 81, 56, 15, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 56, 27, 90], label: 'Series B'}
  ];

  getAll() {
    this.bookingService.getAll()
    .then(
      (res: Booking[]) => (this.bookings = res)
    )
    .catch(err => console.log(err))
  }
}
