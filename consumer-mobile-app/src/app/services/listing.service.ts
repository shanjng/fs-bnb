import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/listing/")
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/listing/" + id)
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }

  create(booking) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.BaseURL + "/api/booking", booking)
      .subscribe(
        (response: any) => {
          resolve(response),
        (err) => reject(err)
        }
      )
    })
  }
}
