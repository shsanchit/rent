import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getUser().subscribe(a=>{
      console.log(a)
      this.users=a
    });
  }

}
