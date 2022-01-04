import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  posts: any;
  postsCommnent: any;

  constructor(private route: ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(e=>{
    this.userService.getPostId(e['pid']).subscribe(a=>{
      console.log(a)
      this.posts=a
    })
    this.userService.getPostComment(e['pid']).subscribe(a=>{
      console.log(a)
      this.postsCommnent=a;
    })
  })
}

deletePost(pid: string){
console.log(pid)
  this.userService.deletePost(pid).subscribe(a=>{
    console.log(a)

    this.router.navigateByUrl('/home/'+pid)
  });

}

}
