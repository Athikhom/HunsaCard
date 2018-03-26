import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-use-card',
  templateUrl: 'use-card.html',
})
export class UseCardPage {

  card = [];
  sendCard: any;
  myValue: any;

  typeOne: FirebaseListObservable<any[]>;
  typeTwo: FirebaseListObservable<any[]>;
  typeThree: FirebaseListObservable<any[]>;
  typeFour: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public db: AngularFireDatabase) {
    this.card = [
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fa1.png?alt=media&token=e1435dcd-b2c8-4ce7-bb79-69a348a0f9f6',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fa2.png?alt=media&token=1d7d181e-5e34-4f2e-8a64-dd65504ef497',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fa3.png?alt=media&token=14693a33-cad7-45fe-a32e-c10528814074',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl1.png?alt=media&token=ba9a52de-4008-46ac-b66d-570484603524',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl2.png?alt=media&token=2e0aa48a-22e9-4f36-a29d-0e9f439681c8',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl3.png?alt=media&token=fd6e607e-6750-467c-b2fb-ae3c9073d14f',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl4.png?alt=media&token=20c27ad6-2a0e-4b7c-bac1-6e928fc0ebd0',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl5.png?alt=media&token=4a64ef84-cda7-403f-805d-130fb6c7cade',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl6.png?alt=media&token=1312ccb3-0dce-48f1-b7a4-b145ca5686ed',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fun1.png?alt=media&token=bed4be0e-fe38-4604-98f5-85a2cc4424f6',
      'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fun2.png?alt=media&token=405afe97-7791-4cfb-96d6-93052656627b'
    ]

    this.typeOne = db.list('/TypeOne');
    this.typeTwo = db.list('/TypeTwo');
    this.typeThree = db.list('/TypeThree');
    this.typeFour = db.list('/TypeFour');
  }

  ionViewWillEnter() {
    this.myValue = this.navParams.get('myValue');
    console.log(this.myValue);

  }

  // ฟังก์ชั่นเพิ่มข้อมูลใหม่ เราจะใช้วิธีส่งค่าข้อมูลใหม่กลับมายังหน้าหลัก
  selectCard(temp) {
    // let temp = {
    //   card: card
    // }
    if (this.myValue == "Type1") {
      this.typeOne.push(temp).then(() => {
        this.closeModal()
      })
    } else if (this.myValue == "Type2") {
      this.typeTwo.push(temp).then(() => {
        this.closeModal()
      })
    } else if (this.myValue == "Type3") {
      this.typeThree.push(temp).then(() => {
        this.closeModal()
      })
    } else {
      this.typeFour.push(temp).then(() => {
        this.closeModal()
      })
    }
  }

  // ฟังก์ชั่นปิด modal มีกำหนด parameter แบบมีค่าหรือไม่ก็ได้ สังเกต ? หลัง data
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
