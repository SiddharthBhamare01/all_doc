import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginStatus: boolean = false;
  private expressUrl: string = 'http://localhost:2000';
  private userProfileSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private loggedInUserProfile: Observable<any> = this.userProfileSubject.asObservable();


  constructor(private http: HttpClient) { }

  getProfile = (): any => {
    console.log(this.loggedInUserProfile);
    return this.loggedInUserProfile;
  };

  setProfile = (user: any): void => {
    console.log(user);
    this.userProfileSubject.next(user);
  }

  register = (user: any): Observable<any> => {
    console.log(user);
    return this.http.post(`${this.expressUrl}/register`, user);
  };

  login = (user: any): Observable<any> => {
    console.log(user);
    this.loginStatus = true;
    return this.http.post(`${this.expressUrl}/login`, user);
  };

  updateProfile = (user: any): Observable<any> => {
    console.log(user);
    return this.http.put(`${this.expressUrl}/users/${user._id}`, user);
  };

  logout = () => {
    console.log(this.loggedInUserProfile);
    this.loginStatus = false;
    this.userProfileSubject.next(null);
    console.log(this.loggedInUserProfile);
  };

  getLoginStatus = () => {
    console.log(this.loginStatus);
    return this.loginStatus;
  };

}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private expressUrl: string = 'http://localhost:2000';


//   private loggedInUserProfile: any;

//   constructor(private http: HttpClient) { }

//   getProfile = (): any => {
//     console.log(this.loggedInUserProfile);
//     return this.loggedInUserProfile;
//   };

//   setProfile = (user: any): void => {
//     console.log(user);
//     this.loggedInUserProfile = user;
//   }

//   register = (user: any): Observable<any> => {
//     console.log(user);
//     return this.http.post(`${this.expressUrl}/register`, user);
//   };

//   login = (user: any): Observable<any> => {
//     console.log(user);
//     return this.http.post(`${this.expressUrl}/login`, user);
//   };

//   updateProfile = (user: any): Observable<any> => {
//     console.log(user);
//     return this.http.put(`${this.expressUrl}/update`, user);
//   };

//   logout = () => {
//     console.log('logout');
//     this.loggedInUserProfile = { username: '', password: '' };
//   };

// }


