import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://jsonplaceholder.typicode.com/users/2';

  constructor(private http: HttpClient) { }

  // List<Employee> empList;

  getUserProfile = (): Observable<any> => {
    console.log('getUserProfile');
    return this.http.get(this.url);
  };
  
}
