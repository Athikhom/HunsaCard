import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fullname:string;
  age:number;
  other:any;
  group:Array<{id:number,name:string}> =[];
  constructor(public navCtrl: NavController) {
    this.fullname = 'Myname';
    this.age = 20;
    this.group.push({id:1,name:'Jjjjohn'});
    this.group.push({id:2,name:'Bohn'});
    this.group.push({id:3,name:'Tohn'});
  }
  goDetail(_item){
    this.navCtrl.push(DetailPage,{item:_item});

  }
}
