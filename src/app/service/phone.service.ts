import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private firestore:AngularFirestore,) { }

addContact(name: any,mobile: any,email: any){

  return this.firestore.collection('contact').doc(email).set({
    name:name,
    mobible:mobile,
    email:email
  })
}

readAllContact(){

  return this.firestore.collection('contact').snapshotChanges();
}
}
