import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authUser) {
    
    return new Promise((resolve, reject) => {
      
      // headers: key value pairs for metadata 
      const headers = new HttpHeaders();

      this.http.post(environment.BaseURL + "/api/auth/login", authUser, { headers }).subscribe(
        (response: any) => {
        localStorage.setItem("userid", response.id);
        resolve(response)
      },
        (err) => {
          console.log("err: ", err)
          reject(err)
        }
      ) 
    })
  }

  register(authUser) {

    return new Promise((resolve, reject) => {
      
      // headers: key value pairs for metadata 
      const headers = new HttpHeaders();

      this.http.post(environment.BaseURL + "/api/auth/register", authUser, { headers }).subscribe(
        (response: any) => {
        localStorage.setItem("userid", response.insertId);
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
