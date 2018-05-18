import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MobileRechargePage } from '../mobile-recharge/mobile-recharge';
import { BankingPage } from '../banking/banking';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { RegisterService } from '../services/app-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PagePage } from '../page/page';
import { Observable } from "rxjs/Observable";
import { TokenParams } from '../services/TokenParams';
import { SCRequest } from '../services/SCRequest';
import { StorageService } from '../services/Storage_Service';
import { ConstantService } from '../services/Constants';
import { User } from '../LocalStorageTables/User';
import { SelfCareAc } from '../LocalStorageTables/SelfCareAc';
import { DigiParty } from '../LocalStorageTables/DigiParty';
import { Tenant } from '../LocalStorageTables/Tenant';
import { AddBankRequest } from '../View Models/AddBankRequest';
import { AddBankResponse } from '../View Models/AddBankResponse';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  addbankresponse: AddBankResponse;
  addbankreq: AddBankRequest;
  SelfCareAc: SelfCareAc;
  DigiParty: DigiParty;
  Tenant: Tenant;
  SelfCareAcs: SelfCareAc;
  DigiParties: DigiParty;
  Tenants: Tenant;
  TenantId: any;
  PartyMastId: any;
  username=JSON.parse(localStorage.getItem(this.constant.DB.User)).UserName;
  user:User;
  uniqueKey=JSON.parse(StorageService.GetItem(this.constant.DB.User)).UniqueKey;
  ActiveBankName=JSON.parse(StorageService.GetItem(this.constant.DB.User)).ActiveTenantName;
  userTokenData: any;
  tokendata: any;
  SCReq: any;
  OS: string;
  scr: SCRequest;
  UToken: any;
  isLoginError: boolean;
  formgroup:FormGroup;
  pword:AbstractControl;
  
  //userName=this.regService.userresult.UserName;

  constructor(public constant:ConstantService,public loadingController: LoadingController,public formbuilder:FormBuilder, private regService : RegisterService, public navCtrl: NavController) {
    this.formgroup = formbuilder.group({
      pword:['',[Validators.required,Validators.minLength(4)]]

    });
    this.pword = this.formgroup.controls['pword'];
  }
  ngOnInit() {
    
 }
  OnSubmit(password){
    let loading = this.loadingController.create({
      content: 'Syncing Operators and Services'
    });

    loading.present();
    var OS=JSON.parse(localStorage.getItem(this.constant.DB.OS));
    var SelfCareAc=JSON.parse(localStorage.getItem(this.constant.DB.SelfCareAc));
    //var param3="UserName";
    //var param4="unique";
      //this.regService.loginbyHttpClient(StorageService.GetItem(param3), password,StorageService.GetItem(param4)).subscribe((data : any)=>{       
                //this.regService.loginbyHttpClient(StorageService.GetItem(this.constant.GetUserKey.UserName), password,StorageService.GetItem(this.constant.GetUserKey.UniqueKey)).subscribe((data : any)=>{        
      //this.regService.loginbyHttpClient(this.constant.GetUserKey.UserName, password,this.constant.GetUserKey.UniqueKey).subscribe((data : any)=>{        
          //this.regService.loginbyHttpClient(this.user.UserName, password,this.user.UniqueKey).subscribe((data : any)=>{        
            this.regService.loginbyHttpClient(this.username, password,this.uniqueKey).subscribe((data : any)=>{        

        this.userTokenData=data;
          this.regService.userToken=this.userTokenData.access_token;
          localStorage.setItem('userToken',this.userTokenData.access_token);
          //  });
          // LocalStorageService.SetAuthorizationData(data.access_token);
        //if(localStorage.getItem("OSKey")==null||localStorage.getItem("SelfCareAcKey")==null)
          
               
        
      });
      if(OS==null){
        this.regService.getservicesByHttpclient().subscribe((data: any) => {
          this.OS=JSON.stringify(data);
          StorageService.SetItem(this.constant.DB.OS,this.OS);

      });
     }
     setTimeout(() => {
      loading.dismiss();
    }, 2000); 

        let loadingnew = this.loadingController.create({
          content: 'Syncing Accounts'
        });
    
        loadingnew.present();

        // var ActiveTenantId=this.regService.TenantId;
        // this.Tenants=JSON.parse(StorageService.GetItem(this.constant.DB.Tenant));
        // this.Tenant= this.Tenants.filter(function (obj) { return obj.Id === ActiveTenantId; });
        // this.DigiParties=JSON.parse(StorageService.GetItem(this.constant.DB.DigiParty));
        // this.DigiParty=this.DigiParties.filter(function (obj) { return obj.Id === ActiveTenantId; });
        // this.SelfCareAcs=JSON.parse(StorageService.GetItem(this.constant.DB.SelfCareAc));
        // this.SelfCareAc=this.SelfCareAcs.filter(function (obj) { return obj.Id === ActiveTenantId; });
          if(this.Tenant==null||this.DigiParty==null||this.SelfCareAc==null){
             this.callservices();
          }
          setTimeout(() => {
            loadingnew.dismiss();
          }, 2000); 
          setTimeout(() => {
            this.navCtrl.push(PagePage, { 'ActiveBankName': this.ActiveBankName });
          }, 1000);
      //});
      
  }


  callservices(){
    this.addbankreq={
      TenantId:JSON.parse(StorageService.GetItem(this.constant.DB.User)).ActiveTenantId,
      MobileNo:JSON.parse(StorageService.GetItem(this.constant.DB.User)).UserName
    }
this.regService.AddBank(this.addbankreq).subscribe((data:any)=>{
  this.addbankresponse=data;
    //this.Tenant={
    //   Id:data.UserId,
    //   TenantId:data.TenantId,   //ActiveTenantId
    //   Name:data.TenantName,
    //   Address:data.TenantAddress,
    //   Logo:this.regService.Logo
    // }
    // StorageService.SetItem(this.constant.DB.Tenant,JSON.stringify([this.Tenant]));  //Works, But not as of reqment
    
    // this.DigiParty={
        //   Id:data.DigiPartyId,
        //   DigiPartyId:data.DigiPartyId,
        //   PartyMastId:data.PartyMastId,
        //   MobileNo:data.MobileNo,
        //   TenantId:data.TenantId,  //ActiveTenantId
        //   Name:data.Name
        // }
            //StorageService.SetItem(this.constant.DB.DigiParty,JSON.stringify(this.DigiParty));  //Works, But not as of reqment
});
//    

      this.PartyMastId=JSON.parse(StorageService.GetItem(this.constant.DB.DigiParty)).PartyMastId;
      this.TenantId=JSON.parse(StorageService.GetItem(this.constant.DB.DigiParty)).TenantId;      
      this.scr={
              // PartyMastId:localStorage.getItem('PartyMastId'),
              PartyMastId:this.PartyMastId,
              TenantId:this.TenantId
            }
      
            this.regService.getAccountsbyHttpClient(this.scr).subscribe((data: any) => {
            this.SCReq=JSON.stringify(data);
            StorageService.SetItem(this.constant.DB.SelfCareAc,this.SCReq)

            });
  }
             
    

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToMobileRecharge(params){
    if (!params) params = {};
    this.navCtrl.push(MobileRechargePage);
  }
  goToBanking(params){
    if (!params) params = {};
    this.navCtrl.push(BankingPage);
  }
}
