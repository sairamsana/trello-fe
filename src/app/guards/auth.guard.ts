import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { AuthenticationService } from '../service/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private authService: AuthenticationService) { }

    canActivate() {
        const user = this.authService.getCurrentUser();
        if (user) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
