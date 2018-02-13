import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-random-card',
  templateUrl: 'random-card.html',
})
export class RandomCardPage {

  dataCard: FirebaseListObservable<any[]>;
  card = [];
  randomNum: any;
  sumCard: any;
  sumStudent: any;

  data = [
    "5711403148",
    "5711403157",
    "5711403171",
    "5711403193",
    "5711403229",
    "5711403241",
    "5711403296",
    "5711403311",
    "5711403346",
    "5711403366",
    "5711403384",
    "5711403407"
  ]


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase) {
    let a1 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fa1.png?alt=media&token=e1435dcd-b2c8-4ce7-bb79-69a348a0f9f6';
    let a2 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fa2.png?alt=media&token=1d7d181e-5e34-4f2e-8a64-dd65504ef497';
    let a3 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fa3.png?alt=media&token=14693a33-cad7-45fe-a32e-c10528814074';
    let l1 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl1.png?alt=media&token=ba9a52de-4008-46ac-b66d-570484603524';
    let l2 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl2.png?alt=media&token=2e0aa48a-22e9-4f36-a29d-0e9f439681c8';
    let l3 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl3.png?alt=media&token=fd6e607e-6750-467c-b2fb-ae3c9073d14f';
    let l4 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl4.png?alt=media&token=20c27ad6-2a0e-4b7c-bac1-6e928fc0ebd0';
    let l5 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl5.png?alt=media&token=4a64ef84-cda7-403f-805d-130fb6c7cade';
    let l6 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fl6.png?alt=media&token=1312ccb3-0dce-48f1-b7a4-b145ca5686ed';
    let un1 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fun1.png?alt=media&token=bed4be0e-fe38-4604-98f5-85a2cc4424f6';
    let un2 = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fun2.png?alt=media&token=405afe97-7791-4cfb-96d6-93052656627b';
    this.card = [a1, a2, a3, l1, l2, l3, l4, l5, l6, un1, un2];
    this.sumCard = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fstart.jpg?alt=media&token=84cdddbf-2b50-46a0-ad35-5aa95d3e17e2';
    this.sumStudent = null;


  }

  randomCards() {


    this.randomNum = Math.floor(Math.random() * this.card.length);
    this.sumCard = this.card[this.randomNum];
    console.log("Card No : ", this.card[this.randomNum]);

  }

  randomStudent() {
    this.randomNum = Math.floor(Math.random() * this.data.length);
    this.sumStudent = this.data[this.randomNum];
    console.log("Student ID : ", this.data[this.randomNum]);
  }

  sendToStudent() {
    this.dataCard = this.db.list('/Student/');
    this.dataCard.push({
      card: this.sumCard,
      stdID: this.sumStudent
    }).then(()=>{
      alert('Send Cards')
      this.sumCard = 'https://firebasestorage.googleapis.com/v0/b/hunsacards.appspot.com/o/cards%2Fstart.jpg?alt=media&token=84cdddbf-2b50-46a0-ad35-5aa95d3e17e2';
      this.sumStudent = null;
    });
  }


}
