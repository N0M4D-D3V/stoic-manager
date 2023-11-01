import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public title!: string;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        const splitted: string[] = event.url.split('/');
        this.title = splitted[splitted.length - 1].replaceAll('-', ' ');
      }
    });
  }
}
