import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/user")
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (err) => reject(err)
    )
    })
  }
}
