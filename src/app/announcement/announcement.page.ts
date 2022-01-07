import { Component, OnInit } from '@angular/core';
import { announcement } from '../services/bucket';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  announcements
  constructor() { }

  ngOnInit() {
    this.getannouncements().then((data)=>this.announcements=data)
  }
  

  getannouncements(){
    return announcement.getAll()
  }
}
