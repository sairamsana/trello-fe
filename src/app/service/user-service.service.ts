import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiUrls from './api-urls';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }
  login: boolean = false
  getLoginUserDetails = () => {
    return this.httpClient.get(apiUrls.GETMEMBER, { withCredentials: true }).pipe((res) => {
      this.login = true;
      console.log(res.toLocaleString)
      return res
    })
  }

  getCardsDetails = () => {
    return this.httpClient.get(apiUrls.CARDSCRUD, { withCredentials: true })
  }

  saveCardDetails = (data: any) => {
    return this.httpClient.post(apiUrls.CARDSCRUD, data, { withCredentials: true })
  }

  updateCardDetails = (id:string,data: any) => {
    return this.httpClient.put(apiUrls.CARDSCRUD+"/"+id, data, { withCredentials: true })
  }


}
