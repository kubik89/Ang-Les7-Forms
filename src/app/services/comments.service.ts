import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AllPosts} from '../model/comment-model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getCommentByPostId(postId: number): Observable<AllPosts[]> {
    return this.http.get<AllPosts[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
