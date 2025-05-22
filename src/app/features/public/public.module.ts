import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicRoutingModule, HomeComponent],
})
export class PublicModule {}
