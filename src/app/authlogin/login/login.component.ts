import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/auth.service';
import apiUrls from '../../constants/api-urls';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  urlLink = apiUrls.AUTHENTICATE;

  constructor(private authService: AuthenticationService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.authService.getLoginUserDetails().subscribe((res: any) => {
      if (res._id) {
        this.router.navigate(['/dashboard/default'])
      }
    })
  }

  loginClick(): void {
    this.document.location.href = this.urlLink;
  }

}
