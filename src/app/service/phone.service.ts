import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private firestore:AngularFirestore,private toastController:ToastController) { }

addContact(name: any,mobile: any,email: any){

  return this.firestore.collection('contact').doc(email).set({
    name:name,
    mobible:mobile,
    email:email
  },{merge: false}
  ).then(( ()=>{
    this.presentToast('Contact Added Sucessfully!')
  }))
}
updateContact(name: any,mobile: any,email: any){

  return this.firestore.collection('contact').doc(email).update({
    name:name,
    mobible:mobile,
  },
  ).then(( ()=>{
    this.presentToast('Contact Updated Sucessfully!')
  }))
}

readAllContact(){

  return this.firestore.collection('contact').snapshotChanges();
}
getAllContact (){

  return this.firestore.collection('contact').snapshotChanges();
}

readContactId(id: string ): Observable<any>{

  return this.firestore.collection('contact').doc(id).snapshotChanges();
}
readContactId2(id: string ){

  return this.firestore.collection('contact').doc(id).get();
}


async deleteContact(id: string){

  await this.firestore.collection('contact').doc(id).delete();
  this.presentToast('Contact Has been Deleted!!');

}

searchContact(sid){

  return this.firestore.collection('contact', ref => ref.where('email', '>=', sid).where('email', '<=', sid)).snapshotChanges();



}
async presentToast(mes: any) {
  const toast = await this.toastController.create({
    message: mes,
    duration: 5000,
    color:'success',
//    position: 'top',

  });
  toast.present();
}
async toastWarning(mes: any) {
  const toast = await this.toastController.create({
    message: mes,
    duration: 3000,
    color:'warning',
//    position: 'top',

  });
  toast.present();
}

}
