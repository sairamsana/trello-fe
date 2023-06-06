import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-delete-card-dailogue',
  templateUrl: './delete-card-dailogue.component.html',
  styleUrls: ['./delete-card-dailogue.component.scss']
})
export class DeleteCardDailogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteCardDailogueComponent>,
    private userService: UserServiceService,
    private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    if (this.data?._id) {
      this.userService.deleteCardDetails(this.data._id).subscribe((res) => {
        this.notification.openSnackBar("Card Deleted Successfully")
        this.dialogRef.close()
      })
    } else {
      this.notification.openSnackBar("Failed to Card")
      this.dialogRef.close()
    }
  }

}
