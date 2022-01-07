import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {  category } from '../services/bucket';
import { LocationApiService } from '../services/location-api.service';
@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {
  countries: any;
  cities: any;
  states: any;
  categoriess;
  catid;
  filter = {
   
    adverst_status:String,
    address: {
      country: '',
      city: '',
      district: '',
    },
    categories:{
     $in: [],
    },
    price: {$gte: 0, $lte: 1000000000}
  };

  constructor(private _locationService: LocationApiService, private _modal: ModalController ) {}

  async ngOnInit() {
    await this.getCountries()
    this.getcategories().then((data)=>this.categoriess=data)
  }
  
  async getCountries() {
    this.countries = await this._locationService.getCountries();
    this.countries = this.countries['data'];
  }
  pushcatid(){
    return this.filter.categories.$in.push(this.catid)
  }
  async countryChange(value) {
    this.filter.address.country = value;
    let citiesOfcountry = await this._locationService.getCityByCountry(value);

    this.cities = citiesOfcountry['data']['states'];
    this.filter.address.city = '';
    this.filter.address.district = '';
  }

  getcategories(){
    return category.getAll()
  }

 

  async cityChange(value) {
    this.filter.address.city = value;
    let stateOfcity = await this._locationService.getStateByCity(this.filter.address.country, value);

    this.states = stateOfcity['data'];
    this.filter.address.district = '';
  }

  async districtChange(value){
    this.filter.address.district = value;
  }
  deactiveFilter(){
    this._modal.dismiss()
  }

  setFilter() {
    this.pushcatid()
    for(let key of  Object.keys(this.filter.address)){
      if(this.filter.address[key]){
        this.filter[`address.${key}`] = this.filter.address[key]
      }
    }
    
    this._modal.dismiss({
      filter: this.filter,
    });
  }

  clearFilter() {
    this._modal.dismiss({
      action: 'clear_filter',
    });
  }
}
