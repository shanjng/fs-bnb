import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // Dependency Injection!!???
    private httpClient: HttpClient
  ) { }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.BaseURL + "/api/user/")
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get(environment.BaseURL + "/api/user/" + id)
      .subscribe(
        (response) => {
          resolve(response)
        },
        (err) => {
          console.log(err)
          reject(err)
        }
      )
    })
  }
}
