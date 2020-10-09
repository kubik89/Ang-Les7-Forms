import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserId} from '../model/user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getuserById(id: number): Observable<UserId> {
    return this.http.get<UserId>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
