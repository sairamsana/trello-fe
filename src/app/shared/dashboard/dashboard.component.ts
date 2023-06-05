import { Component, Inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { TrellocardComponent } from 'src/app/features/trellocard/trellocard.component';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  cardsList: any = []

  constructor(public dialog: MatDialog, private userService: UserServiceService) {

  }

  ngOnInit(): void {
    this.userService.getCardsDetails().subscribe((res) => {

      this.cardsList = res;
    })
  }


  updateDialog(card: any): void {
    const dialogRef = this.dialog.open(TrellocardComponent, {
      width: '300px',
      data: card
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cardsList = [];
      this.userService.getCardsDetails().subscribe((res) => {
        this.cardsList = res;
      })
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TrellocardComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cardsList = [];
      this.userService.getCardsDetails().subscribe((res) => {
        console.log(res)
        this.cardsList = res;
      })
    });
  }

}
