import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Post} from '../post';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [UserService]
})
export class HttpComponent implements OnInit {

  users: Object = [];
  posts: Post = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public loadUser() {
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    }, (error: HttpErrorResponse) => {
      alert(error);
    });
  }

  public loadPost() {
    this.userService.getAllPost().subscribe((posts: Post) => {
      this.posts = {...posts};
      console.log(this.posts);
    } )
  }
}
