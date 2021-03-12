import { Router } from '@angular/router';
import { LoginResponseModel, UserInfo } from './../models/authentication.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user_info_subject: BehaviorSubject<UserInfo>;
  user_info: Observable<UserInfo>
  serverUrl: string
  isUserLoggedIn: boolean = false

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.serverUrl = environment.SERVER_URL
    if(sessionStorage.getItem('user_info')){
      this.user_info_subject = new BehaviorSubject<UserInfo>(JSON.parse(sessionStorage.getItem('user_info'))[0]);
      this.user_info = this.user_info_subject.asObservable();
      this.isUserLoggedIn = true
    }
   }

  userLogin(loginObj){
    return this.http.post<LoginResponseModel>(`${this.serverUrl}${environment.API.login}`, loginObj)
    .pipe(map(loginResponse => {
      if (loginResponse) {
        this.setStorageInfo("token", loginResponse.token);
        this.user_info_subject = new BehaviorSubject<UserInfo>(loginResponse.data[0]);
        this.user_info = this.user_info_subject.asObservable();
        this.setStorageInfo("user_info", loginResponse.data);
        this.isUserLoggedIn = true
      }
      return loginResponse;
    }))
  }

  setStorageInfo(keys: string, values: any) {
    return sessionStorage.setItem(keys, JSON.stringify(values));
  }

  logout(){
    sessionStorage.clear()
    this.isUserLoggedIn = false
  }
}
