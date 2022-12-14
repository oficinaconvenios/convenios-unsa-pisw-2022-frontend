
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDialogModule} from '@angular/material/dialog';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    IvyCarouselModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule
  ]
})
export class MaterialModule { }
