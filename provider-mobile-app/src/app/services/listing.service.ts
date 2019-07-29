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

  getByProviderId(id) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/listing/provider/" + id)
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
      )
    })
  }

  addImgUrl(listingIdIn, imgUrlIn) {
    // console.log("Image url: ", imgUrl)
    return new Promise((resolve, reject) => {
      this.http.post(environment.BaseURL + "/api/listing/imgUrl", 
      {
        listingId: listingIdIn,
        imgUrl: imgUrlIn
      })
      .subscribe(
        (response: any) => {
          resolve(response => resolve(response))
        },
        (err) => reject(err)
      )
    })
  }

  create(listing, imgUrl) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.BaseURL + "/api/listing", listing)
      .subscribe(
        (response: any) => {
          console.log("response: ", response)
          this.addImgUrl(response, imgUrl)
          .then(res => resolve(res))
          .catch(err => reject(err))
        },
        (err) => reject(err)
      )
    })
  }


  update(listing) {
    return new Promise((resolve, reject) => {
      this.http.patch(environment.BaseURL + "/api/listing", listing)
      .subscribe(
        (response: any) => {
          resolve(response),
        (err) => reject(err)
        }
      )
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.BaseURL + "/api/listing/" + id)
      .subscribe(
        (response: any) => {
          resolve(response),
        (err) => reject(err)
        }
      )
    })
  }
}
