import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs"

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {
    
  }

  toggle(){
    this.showAddTask = !this.showAddTask;
    this.uiService.getShowAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
