import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {userId} from './model/user1';
import {NgForm, NgModel} from '@angular/forms';
import {Post} from './model/post-model';
import {PostService} from './services/post.service';
import {CommentsService} from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: any = {inputId: 0};
  post: any = {InputPostId: 0};
  userPost: any = {myPostbyId: 0};
  userInfo: any = {userId: 0};
  postDetailse: any = {userInfo: 0};
  test1 = 0;
  myPostbyId: any = {myPostbyId: 0};
  idPost: any = {postId: 0};

  constructor(private userService: UserService,
              private postService: PostService,
              private commentsService: CommentsService) {
  }

  searchUser(form: NgForm): void {
    this.userService.getuserById(form.controls.inputId.value).subscribe(value => {
      this.user = value;
    });
  }

  findPostById(PostForm: NgForm): void {
    this.postService.getPostbyId(PostForm.controls.InputPostId.value).subscribe(idPost => {
      this.post = idPost;
    });
  }

  findUserPost(someNubmer: string): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      console.log(value);
      this.userPost = value;
    });
  }

  findUser(userForm: NgForm): void {
    this.userService.getuserById(userForm.controls.userId.value).subscribe(value => {
      this.userInfo = value;
    });
  }

  getUserPosts(aboutUser: NgForm): void {
    this.postService.getPostbyUserId(aboutUser.controls.userInfo.value).subscribe(value => {
      this.postDetailse = value;
    });
  }

  getPost(id: string): void {
    this.postService.getPostbyId(id).subscribe(value => {
      console.log(value);
      this.myPostbyId = value;
      // console.log('mypostId' + this.myPostbyId);
    });
  }

  findPostByID(myPostIDForm: NgForm): void {
    this.postService.getPostbyId(myPostIDForm.controls.postId.value).subscribe(value => {
      console.log(value);
      this.idPost = value;
    });
  }
}
