import { Injectable } from '@angular/core';


@Injectable()
export class UIHelperService{
    //readonly rootUrl = 'http://localhost:55394';
    readonly rootUrl='https://sahakari.azurewebsites.net';
    //readonly baseUrl='http://localhost:55394/api';
 readonly baseUrl='https://sahakari.azurewebsites.net/api';
    //readonly rootUrl1 = 'http://localhost:55394/token';
readonly rootUrl1 = 'https://sahakari.azurewebsites.net/token';
    CallWebAPIUrl(api_action_name:any){
        return this.rootUrl+api_action_name;
}
CallWebAPIUrlNew(api_action:any){
    return this.baseUrl+api_action;
}
CallWebAPIUrl1(){
    return this.rootUrl;
}
}
