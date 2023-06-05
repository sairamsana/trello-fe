import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  constructor(private router: ActivatedRoute ) { }

  ngOnInit(
  ): void {
    console.log(this.router.snapshot.fragment)
    if(this.router.snapshot.fragment !== null){
      const searchParams = new URLSearchParams(this.router.snapshot.fragment);
      const token = searchParams.get("token");
      console.log(token);
    }
  }

}
