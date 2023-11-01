import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, CardEditComponent],
  exports: [CardComponent, CardEditComponent],
  imports: [CommonModule, RouterModule, DialogModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class CardModule {}
