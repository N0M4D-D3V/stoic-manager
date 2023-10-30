import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { ToggleMenuComponent } from './components/toggle-menu/toggle-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToolbarComponent, ToggleMenuComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
})
export class ToolbarModule {}
