import { NgModule } from '@angular/core';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CardModule } from './components/card/card.module';
import { CardListModule } from './components/card-list/card-list.module';

@NgModule({
  declarations: [],
  exports: [ToolbarModule, CardModule, CardListModule],
  imports: [ToolbarModule, CardModule, CardListModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
