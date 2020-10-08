import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {userId} from '../model/user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getuserById(id: string): Observable<userId[]> {
    return this.http.get<userId[]>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
