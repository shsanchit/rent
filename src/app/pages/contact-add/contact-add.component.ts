import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;
  uEmail!: boolean;

  constructor(public formBuilder: FormBuilder,private phone:PhoneService,private router:Router) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })

  }



  get errorControl() {
    return this.contactForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.contactForm.valid) {
      //console.log('Please provide all the required values!')

      this.phone.toastWarning('Please provide all the required values!')
    } else {
      console.log(this.contactForm.value);
      this.checkEmailID(this.contactForm.value['email'])

      if(this.uEmail==false){


     this.phone.addContact(this.contactForm.value['name'],this.contactForm.value['mobile'],this.contactForm.value['email'])
    }else{
     // console.log('Please provide unique email!')

      this.phone.toastWarning('Please provide unique email!')


    }

    }
  }

  checkEmailID(id: string){

    this.phone.readContactId(id).subscribe(a=>{
      console.log(a.payload.exists)
      this.uEmail=a.payload.exists
    })
  }
  search(e){

    console.log(e.target.value);
    this.router.navigateByUrl('/contact/'+e.target.value)


  }
}
