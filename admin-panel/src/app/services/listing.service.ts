import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/listing")
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }
}
