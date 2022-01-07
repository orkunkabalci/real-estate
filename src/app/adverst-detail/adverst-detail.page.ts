import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { adverst, initialize } from '../services/bucket';

@Component({
  selector: 'app-adverst-detail',
  templateUrl: './adverst-detail.page.html',
  styleUrls: ['./adverst-detail.page.scss'],
})
export class AdverstDetailPage implements OnInit {
  adverstId;
  adverst;
  selectedimg: any;
  activeSegment: string = 'information';

  constructor(
    private route: ActivatedRoute,
  ) {
    initialize({ identity: environment.token });
  }
  async ngOnInit() {
    this.adverstId = this.route.snapshot.paramMap.get('id');
    await this.getadverst()
      .then((data) => (this.adverst = data))
      .then(() => this.adverst.images.unshift(this.adverst.cover_img));
    this.selectedimg = this.adverst.images[0];
  }
  slideOpts = {
    slidesPerView: 3.5,
    spaceBetween: 15,
  };

  segmentChanged(value) {
    this.activeSegment = value;
  }
  getadverst() {
    return adverst.get(this.adverstId, { queryParams: { relation: true } });
  }

  activeimg(data) {
    return this.selectedimg == data;
  }
  imgclick(data) {
    return (this.selectedimg = data);
  }

}
