import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getByListingId(listingId) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/booking/listingId/" + listingId)
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }
  
  updateStatus(bookingId, newStatus) {
    return new Promise((resolve, reject) => {
      console.log("status: ", status)
      this.http.patch(environment.BaseURL + "/api/booking/" + bookingId, {status: newStatus})
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }
}
