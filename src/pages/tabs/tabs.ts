import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutusPage } from '../aboutus/aboutus';
import { ListPage } from '../list/list';
import { RandomCardPage } from '../random-card/random-card';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabs1Root = HomePage;
  tabs2Root = RandomCardPage;
  tabs3Root = ListPage;
  tabs4Root = AboutusPage;

  constructor() {
  }



}
