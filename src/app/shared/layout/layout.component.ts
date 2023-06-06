import { Component, inject, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  // private breakpointObserver = inject(BreakpointObserver);

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean = false;
  userName: string = "Sai Ram";
  isAdmin: boolean = false;


  constructor(private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthenticationService,
    private router: Router
  ) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.authService.getUserName().subscribe((res: any) => {
      this.userName = res.fullName;
    })
  }

  logout(): void {
    this.authService.logout().subscribe((res: any) => {
      if (res.status === 'success') {
        this.router.navigate(['/login'])
      }
    })
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
