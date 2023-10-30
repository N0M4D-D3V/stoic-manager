import { NgModule } from '@angular/core';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CardModule } from './components/card/card.module';

@NgModule({
  declarations: [],
  exports: [ToolbarModule, CardModule],
  imports: [ToolbarModule, CardModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
