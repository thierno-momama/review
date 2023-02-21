import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AHeaderComponent } from './components/a-header/a-header.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { PostCardComponent } from './components/post-card/post-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AHeaderComponent,
    PostDataComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
