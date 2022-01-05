import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {

  lisiting: { id: string; name: any; mobile:any }[];

  constructor(private phone:PhoneService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(e=>{
console.log(e['id'])

    this.phone.searchContact(e['id']).subscribe(a=>{

    this.lisiting = a.map(e=>{
     // console.log(e)
      return{
        id:e.payload.doc.id,
       name:e.payload.doc.data()['name'],
        mobile:e.payload.doc.data()['mobible'],

      }
    })
  })  })

}

  deleteContact(id){

    this.phone.deleteContact(id);


  }
}
