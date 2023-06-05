import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // urlLink = `https://trello.com/1/authorize?return_url=http://localhost:5000/authenticate&expiration=never&scope=read,write,account&response_type=token&key=9303bee3409b8c827da5aec23a86c644&callback_method=fragment`
  urlLink = `http://localhost:5000/api/v1/authenticate`

  constructor(private userService:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getLoginUserDetails().subscribe((res:any) => {
      if(res._id){
        this.router.navigate(['/dashboard/default'])
      }
    })

  }

}
