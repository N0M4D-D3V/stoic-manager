import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list.component';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [CardListComponent],
  exports: [CardListComponent],
  imports: [CommonModule, CardModule],
  providers: [],
  bootstrap: [],
})
export class CardListModule {}
