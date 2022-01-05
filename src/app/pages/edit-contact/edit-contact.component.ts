import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;
  uEmail!: boolean;
  email: any;
  mobile: any;
  name: any;

  constructor(public formBuilder: FormBuilder,private phone:PhoneService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(e=>{
      this.phone.readContactId2(e['id']).subscribe(a=>{
        console.log(a.data());
        this.email=a.data()['email']
        this.mobile=a.data()['mobible']
        this.name=a.data()['name']
      })
      })

    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
     // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })

  }



  get errorControl() {
    return this.contactForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.contactForm.valid) {
      console.log('Please provide all the required values!')
    } else {
      console.log(this.contactForm.value);



     this.phone.updateContact(this.contactForm.value['name'],this.contactForm.value['mobile'],this.email)
    }

    }

}
