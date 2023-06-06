import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-trellocard',
  templateUrl: './trellocard.component.html',
  styleUrls: ['./trellocard.component.scss']
})
export class TrellocardComponent implements OnInit {
  objectKeys = Object.keys;
  createCard: FormGroup;
  ListOnBoard: any = {};

  cardsList: any = []

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<TrellocardComponent>,
    private userService: UserServiceService,
    private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userService.getCardsDetails().subscribe((res) => {
      this.cardsList = res;
      this.ListOnBoard = this.getListOfBoard(res);
    })
    this.createCard = new FormGroup({
      'name': new FormControl(this.data?.name || null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'desc': new FormControl(this.data?.desc || null, Validators.required),
      'idList': new FormControl({ value: this.data?.idList || null, disabled: this.data?._id ? true : false }, Validators.required)
    })
  }

  getListOfBoard(data: any) {
    const keyValuePairs: { [key: string]: string | undefined } = {};
    data.forEach((list: any) => {
      const key: string = list._id;
      const value: string = list.name;
      keyValuePairs[key] = value
    });
    return keyValuePairs;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.data?._id) {
      let updateData = { name: this.createCard.value.name, desc: this.createCard.value.desc }
      this.userService.updateCardDetails(this.data._id, updateData).subscribe((res) => {
        if(res){
          this.notification.openSnackBar("Card Updated Successfully")
        }
        this.dialogRef.close()
      })
    } else {
      this.userService.saveCardDetails(this.createCard.value).subscribe((res) => {
        if(res){
          this.notification.openSnackBar("Card Created Successfully")
        }
        this.dialogRef.close()
      })
    }
  }


  onNoClick(): void {

    this.dialogRef.close();
  }


}
