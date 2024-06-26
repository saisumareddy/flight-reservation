import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  closeDialogNo() {
    this.dialogRef.close(false);
  }
  closeDialogYes() {
    this.dialogRef.close(true);
  }
}
