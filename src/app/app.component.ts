import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  initialize } from './services/bucket';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private menu: MenuController) {
    initialize({ identity: environment.token });
  }
  estate;
  ngOnInit() {
  }


  menuclose() {
    this.menu.close();
  }

}
