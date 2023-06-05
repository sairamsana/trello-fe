import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      'name': new FormControl(this.data?.name || null),
      'desc': new FormControl(this.data?.desc || null),
      'idList': new FormControl(this.data?.idList || null)
    })
  }




  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.createCard)
    this.userService.saveCardDetails(this.createCard.value).subscribe((res) => {
      console.log(res);
    })
  }




  onNoClick(): void {
    this.dialogRef.close();
  }


}
