import { Component, OnInit } from '@angular/core';
import { consultant } from '../services/bucket';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.page.html',
  styleUrls: ['./consultant.page.scss'],
})
export class ConsultantPage implements OnInit {
  consultants;
  constructor() { }

  ngOnInit() {
    this.getconsultant().then((data)=>this.consultants=data)
  
  }



  getconsultant(){
   return consultant.getAll()
  }
}
