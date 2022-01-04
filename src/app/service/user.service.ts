import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://jsonplaceholder.typicode.com";



  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.url+'/users')

  }
  getPost(id: string){
   return this.http.get(this.url+'/posts?userId='+id)

  }
  getPostId(pid: string){
   return this.http.get(this.url+'/posts/'+pid)

  }
  getPostComment(pid: string){
   return this.http.get(this.url+'/comments?postId='+pid)

  }

  deletePost(pid: string){
    return this.http.delete(this.url+'/posts/'+pid)
  }

}
