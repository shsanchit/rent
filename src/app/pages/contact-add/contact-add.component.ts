import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  ionicForm!: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,private phone:PhoneService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })

  }



  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
    } else {
      console.log(this.ionicForm.value);

      this.phone.addContact(this.ionicForm.value['name'],this.ionicForm.value['mobile'],this.ionicForm.value['email'])

    }
  }
}
