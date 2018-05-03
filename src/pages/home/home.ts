import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobileRechargePage } from '../mobile-recharge/mobile-recharge';
import { BankingPage } from '../banking/banking';
import { RegisterService } from '../services/app-data.service';
import { RegisterPage } from '../register/register';
import { NgForm } from '@angular/forms';
import { Person } from '../services/person.model';
import { UserClaim } from '../services/userclaim';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  userClaims:UserClaim;
  //userClaims:any=[];
  person:Person;
  //constructor(public navCtrl: NavController, public navParams: NavParams, private userService: RegisterService, private details:RegisterPage) {
    constructor(public navCtrl: NavController, private route: ActivatedRoute, private userService: RegisterService) {

    //constructor(public navCtrl: NavController, private userService: RegisterService) {

  //constructor(public navCtrl: NavController) {

}
  ngOnInit() {
    //this.resetForm();

    // this.userService.getUserClaims().subscribe((data: any) => {
    //   this.userClaims = data;
    //    //this.details.userClaims;
    // });

    //this.userClaims= this.details.userClaims;
    //this.userClaims= this.navParams.get('data.userClaims');
   this.userClaims= this.userService.userClaims;
  // this.userClaims = Array.of(this.userService.userClaims); 
  //  onSu this.foundBooks = Array.of(this.foundBooks); bmit(mobno:any){
  //  this.userService.sendMobileNo(mobno).subscribe(response=>{
  //   this.userClaims= response});
  //  }
  }
  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.reset();
  //   this.person = {
  //     FirstName: '',
  //     LastName: ''
  //   }
  // }

  goToMobileRecharge(params){
    if (!params) params = {};
    this.navCtrl.push(MobileRechargePage);
  }
  goToBanking(params){
    if (!params) params = {};
    this.navCtrl.push(BankingPage);
  }
}
