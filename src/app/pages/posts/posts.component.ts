import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  postsCommnent: any;

  constructor(private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {

    this.route.params.subscribe(e=>{
    this.userService.getPost(e['id']).subscribe(a=>{
      console.log(a)
      this.posts=a
    })
    this.userService.getPostComment(e['id']).subscribe(a=>{
      console.log(a)
      this.postsCommnent=a;
    })

  })
  }

}
