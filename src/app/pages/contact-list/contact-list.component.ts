import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  lisiting: { id: string; name: any; mobile:any }[];

  constructor(private phone:PhoneService) { }

  ngOnInit(): void {

    this.phone.readAllContact().subscribe(a=>{

    this.lisiting = a.map(e=>{
     // console.log(e)
      return{
        id:e.payload.doc.id,
       name:e.payload.doc.data()['name'],
        mobile:e.payload.doc.data()['mobible'],

      }
    })
  })

}

  deleteContact(id){

    this.phone.deleteContact(id);


  }
}
