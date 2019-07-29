import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/booking")
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }
}
