import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-yes-no',
  templateUrl: './dialog-yes-no.component.html',
  styleUrls: ['./dialog-yes-no.component.scss']
})
export class DialogYesNoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogYesNoComponent>) { }

  ngOnInit(): void {
  }

}