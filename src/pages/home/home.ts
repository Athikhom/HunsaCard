import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { UseCardPage } from '../use-card/use-card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  card = [];
  typeCard: string = "Type1";

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  CardModal() {
    let modal = this.modalCtrl.create(UseCardPage,'');
    modal.present();
    modal.onDidDismiss((data) => {
      if(data){ // ในที่นี้เมื่อเพื่มข้อมูล ก็จะส่งค่ากลับมาด้วย ถ้ามีค่า 
        this.card.push(data); // ก็เพื่มข้อมูลที่กรอกเข้าไปใน array ข้อมูล
      }
    });
  }
 
}
