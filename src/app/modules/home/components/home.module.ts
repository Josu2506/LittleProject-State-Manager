import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PeopleTableComponent } from 'src/app/components';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
  HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PeopleTableComponent,
  ],
})
export class HomeModule { }
