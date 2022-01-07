import { Component, OnInit } from '@angular/core';
import { about_us } from '../services/bucket';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  about
  constructor() { }

  async ngOnInit() {
  await  this.getaboutus().then((data)=>this.about=data)
  }


  getaboutus(){
    return about_us.getAll().then((res) => {
      return res[0] || null;
    });
  }
} 
