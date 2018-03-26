import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { UseCardPage } from '../use-card/use-card';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  typeCard: string = "Type1";
  typeOne: any;
  typeOneSub: any;
  typeTwo: any;
  typeTwoSub: any;
  typeThree: any;
  typeThreeSub: any;
  typeFour: any;
  typeFourSub: any;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase, ) {

    this.typeOneSub = db.list('/TypeOne').subscribe((res) => {
      this.typeOne = res
    })

    this.typeTwoSub = db.list('/TypeTwo').subscribe((res) => {
      this.typeTwo = res
    })

    this.typeThreeSub = db.list('/TypeThree').subscribe((res) => {
      this.typeThree = res
    })

    this.typeFourSub = db.list('/TypeFour').subscribe((res) => {
      this.typeFour = res
    })

  }

  CardModal() {
    let modal = this.modalCtrl.create(UseCardPage, {
      myValue: this.typeCard
    });
    let temp = {};
    modal.present();
  }

  deleteCard(key, str) {
    console.log(str);

    var db = firebase.database();
    var survey = db.ref('/' + str + '/');
    survey.child(key).remove();



  }

}
