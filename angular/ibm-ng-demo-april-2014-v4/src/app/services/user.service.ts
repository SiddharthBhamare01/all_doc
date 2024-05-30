import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
    return this.http.post(`${this.expressUrl}/login`, user);
  };

  updateProfile = (user: any): Observable<any> => {
    console.log(user);
    return this.http.put(`${this.expressUrl}/update`, user);
  };

  logout = () => {
    console.log(this.loggedInUserProfile);
    this.userProfileSubject.next(null);
    console.log(this.loggedInUserProfile);
  };
}

