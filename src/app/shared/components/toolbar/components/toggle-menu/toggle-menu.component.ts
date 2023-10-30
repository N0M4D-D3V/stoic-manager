import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss'],
})
export class ToggleMenuComponent {
  public currentPath: string = '/task-tracker';

  constructor(private readonly router: Router) {}

  public navigate(path: string): void {
    this.currentPath = path;
    this.router.navigate([path]);
  }
}
