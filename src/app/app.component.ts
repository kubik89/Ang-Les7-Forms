import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {NgForm, NgModel} from '@angular/forms';
import {PostService} from './services/post.service';
import {CommentsService} from './services/comments.service';
import {Post} from './model/post-model';
import {UserId} from './model/user1';
import {AllPosts} from './model/comment-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: UserId = {id: 0};
  PostOfUser: Post[] = [];
  userPost: Post[];
  userInfo: UserId = {id: 0};
  myPostbyId: Post;
  idPost: Post = {id: 0};
  commByPostId: AllPosts[] = [];

  constructor(private userService: UserService,
              private postService: PostService,
              private commentsService: CommentsService) {
  }

  searchUser(form: NgForm): void {
    if (form.controls.inputId.value >= 1) {
      this.userService.getuserById(form.controls.inputId.value).subscribe(value => {
        this.user = value;
      });
    }
  }

  findPostOfUser(someNubmer: number): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      this.PostOfUser = value;
    });
  }

  findUserPost(someNubmer: number): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      this.userPost = value;
    });
  }


  findUser(userForm: NgForm): void {
    this.userService.getuserById(userForm.controls.userId.value).subscribe(value => {
      this.userInfo = value;
    });
  }

  getPost(id: number): void {
    this.postService.getPostbyId(id).subscribe(value => {
      this.myPostbyId = value;
    });
  }

  findPostByID(myPostIDForm: NgForm): void {
    this.postService.getPostbyId(myPostIDForm.controls.postId.value).subscribe(value => {
      this.idPost = value;
    });
  }

  getCommentByPostId(idPost: number): void {
    this.commentsService.getCommentByPostId(idPost).subscribe(value => {
      this.commByPostId = value;
    });
  }
}
