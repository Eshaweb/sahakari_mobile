import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AutoLogoutService } from '../services/AutoLogOutService';
import { StorageService } from '../services/Storage_Service';
import { ConstantService } from '../services/Constants';
import { FundTransferPage } from '../fund-transfer/fund-transfer';

@Component({
  selector: 'page-banking',
  templateUrl: 'banking.html'
})
export class BankingPage implements OnInit{

  ActiveBankName: any;
  // constructor(public constant:ConstantService,private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
    constructor(public constant:ConstantService,public navCtrl: NavController) {

  //StorageService.SetItem('lastAction', Date.now().toString());

  }

  ngOnInit(){
    this.ActiveBankName=JSON.parse(StorageService.GetItem(this.constant.DB.User)).ActiveTenantName;

  }
  OnBanking(){
    this.navCtrl.push(FundTransferPage);
  }
  
}
