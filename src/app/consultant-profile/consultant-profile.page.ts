import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { adverst, consultant } from '../services/bucket';

@Component({
  selector: 'app-consultant-profile',
  templateUrl: './consultant-profile.page.html',
  styleUrls: ['./consultant-profile.page.scss'],
})
export class ConsultantProfilePage implements OnInit {
  consultant;
  consultantid;
  adversts;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.consultantid = this.route.snapshot.paramMap.get('id');
    this.getconsultant().then((data)=>this.consultant=data)
    this.getAdversts().then((data)=>this.adversts=data)
  }

 
   getAdversts() {
    return adverst.getAll({
      queryParams: {
        relation: true,
        filter:{consultant:this.consultantid}
      },
    });
  }
  getconsultant() {
    return consultant.get(this.consultantid);
  }
}
