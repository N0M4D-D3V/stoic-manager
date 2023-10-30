import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { ToggleMenuComponent } from './components/toggle-menu/toggle-menu.component';

@NgModule({
  declarations: [ToolbarComponent, ToggleMenuComponent],
  exports: [ToolbarComponent],
  imports: [],
  providers: [],
  bootstrap: [],
})
export class ToolbarModule {}
