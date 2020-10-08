import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPostbyId(postId: string): Observable<Post[]> {
    // console.log();
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
  getPostbyUserId(idUser: string): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/?userId=${idUser}`);
  }
}
