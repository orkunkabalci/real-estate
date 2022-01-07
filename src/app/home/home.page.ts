import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { about_us, Adverst, adverst, initialize } from '../services/bucket';
import { ModalController } from '@ionic/angular';
import { LocationApiService } from 'src/app/services/location-api.service';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  filter = {};

  adversts: Adverst[] = [];
  abt
  windowadversts;
  constructor(
    private _locationService: LocationApiService,
    private _modalController: ModalController

  ) {
    initialize({ identity: environment.token });
  }
  async ngOnInit() {
    await this.getAdversts()
      .then((data) => (this.adversts = data))
      this.getaboutus().then((data)=>this.abt=data).then(()=>this.windowadversts=this.abt.window_ads).then(()=>console.log(this.abt))

  }
  slideOpts = {
    slidesPerView: 1,
    autoplay: true,
  };


  
  getaboutus(){
    return about_us.getAll({queryParams:{relation:true}}).then((res) => {
      return res[0] || null;
    });
  }

 
   async getAdversts() {
    return adverst.getAll({
      queryParams: {
        relation: true,
        filter: Object.keys(this.filter).length > 0 ? this.filter : {},
      },
    });
  }

 

  async presentFilterModal() {
    const filterModal = await this._modalController.create({
      component: FilterModalComponent,
      swipeToClose: true,
    });

    filterModal.onWillDismiss().then(async (res) => {
      if (!res.data) {
        return;
      } else if (res.data.action == 'clear_filter') {
        this.filter = {};
      } else {
        res.data.filter =  JSON.parse(JSON.stringify(res.data.filter))
        delete res.data.filter.address
        this.filter = res.data.filter;
      }
      this.adversts = await this.getAdversts();
    }
    
    );
    return await filterModal.present();
  }
  
  
}
