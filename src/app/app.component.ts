import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {NgForm, NgModel} from '@angular/forms';
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
  PostOfUser: any = {myPostbyId1: 0};
  userInfo: any = {userId: 0};
  myPostbyId: any = {myPostbyId: 0};
  idPost: any = {postId: 0};

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

  findPostById(PostForm: NgForm): void {
    this.postService.getPostbyId(PostForm.controls.InputPostId.value).subscribe(idPost => {
      this.post = idPost;
    });
  }

  findUserPost(someNubmer: string): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      this.userPost = value;
    });
  }

  findPostOfUser(someNubmer: string): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      this.PostOfUser = value;
    });
  }

  findUser(userForm: NgForm): void {
    this.userService.getuserById(userForm.controls.userId.value).subscribe(value => {
      this.userInfo = value;
    });
  }

  getPost(id: string): void {
    this.postService.getPostbyId(id).subscribe(value => {
      this.myPostbyId = value;
    });
  }

  findPostByID(myPostIDForm: NgForm): void {
    this.postService.getPostbyId(myPostIDForm.controls.postId.value).subscribe(value => {
      this.idPost = value;
    });
  }
}
