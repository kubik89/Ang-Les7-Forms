import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {NgForm, NgModel} from '@angular/forms';
import {PostService} from './services/post.service';
import {CommentsService} from './services/comments.service';
import {Post} from './model/post-model';
import {UserId} from './model/user1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: UserId = {id: 0};
  // user: any = {inputId1: 0};
  PostOfUser: Post[] = [];
  // post: any = {InputPostId: 0};
  userPost: Post[];
  userInfo: UserId = {id: 0};
  myPostbyId: Post;
  idPost: Post = {id: 0};

  constructor(private userService: UserService,
              private postService: PostService,
              private commentsService: CommentsService) {
  }

  searchUser(form: NgForm): void {
    if (form.controls.inputId.value >= 1) {
      this.userService.getuserById(form.controls.inputId.value).subscribe(value => {
        console.log(value);
        this.user = value;
      });
    }
  }

  findPostOfUser(someNubmer: number): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      this.PostOfUser = value;
    });
  }

  // findPostById(PostForm: NgForm): void {
  //   this.postService.getPostbyId(PostForm.controls.InputPostId.value).subscribe(idPost => {
  //     this.post = idPost;
  //   });
  // }
//
  findUserPost(someNubmer: number): void {
    this.postService.getPostbyUserId(someNubmer).subscribe(value => {
      console.log(value);
      this.userPost = value;
    });
  }


  findUser(userForm: NgForm): void {
    this.userService.getuserById(userForm.controls.userId.value).subscribe(value => {
      console.log(value);
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
      // console.log(myPostIDForm.controls.postId.value);
      this.idPost = value;
    });
  }
}
