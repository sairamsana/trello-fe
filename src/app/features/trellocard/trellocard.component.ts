import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/service/user-service.service';




@Component({
  selector: 'app-trellocard',
  templateUrl: './trellocard.component.html',
  styleUrls: ['./trellocard.component.scss']
})
export class TrellocardComponent implements OnInit {
  objectKeys = Object.keys;
  createCard: FormGroup;
  ListOnBoard: any = {
    '647ac9a8fa422bad0b47dce0': 'To Do',
    '647ac9a8fa422bad0b47dce1': 'Doing',
    '647ac9a8fa422bad0b47dce2': 'Done'
  };



  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<TrellocardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserServiceService) {
    this.createCard = new FormGroup({
      'name': new FormControl(this.data?.name || null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'desc': new FormControl(this.data?.desc || null, Validators.required),
      'idList': new FormControl({ value: this.data?.idList || null, disabled: this.data?._id ? true : false }, Validators.required)
    })
  }




  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.data?._id) {
      let updateData = { name: this.createCard.value.name, desc: this.createCard.value.desc }
      this.userService.updateCardDetails(this.data._id, updateData).subscribe((res) => {
        this.dialogRef.close()
      })
    } else {
      this.userService.saveCardDetails(this.createCard.value).subscribe((res) => {
        this.dialogRef.close()
      })
    }

  }




  onNoClick(): void {
    this.dialogRef.close();
  }


}
