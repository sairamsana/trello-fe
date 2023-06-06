import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiUrls from '../constants/api-urls';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }
  

  getCardsDetails = () => {
    return this.httpClient.get(apiUrls.CARDSCRUD, { withCredentials: true })
  }

  saveCardDetails = (data: any) => {
    return this.httpClient.post(apiUrls.CARDSCRUD, data, { withCredentials: true })
  }

  updateCardDetails = (id:string,data: any) => {
    return this.httpClient.put(apiUrls.CARDSCRUD+"/"+id, data, { withCredentials: true })
  }

  deleteCardDetails = (id:string) => {
    return this.httpClient.delete(apiUrls.CARDSCRUD+"/"+id, { withCredentials: true })
  }


}
