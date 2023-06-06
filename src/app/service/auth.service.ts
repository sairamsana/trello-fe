import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import apiUrls from '../constants/api-urls';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private httpClient: HttpClient) {
    }

    login: boolean = false
    user: any = {}

    getLoginUserDetails = () => {
        return this.httpClient.get(apiUrls.GETMEMBER, { withCredentials: true }).pipe((res) => {
            this.login = true;
            this.user = res;
            return res
        })
    }

    logout(): any {
        // delete sesssion in server
        return this.httpClient.get(apiUrls.LOGOUT, { withCredentials: true })
    }

    getCurrentUser(): boolean {
        return this.login;
    }

    getUserName():any{
        return this.user
    }

}
