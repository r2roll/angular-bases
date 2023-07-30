import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';




@NgModule({
  declarations:[ListComponent,HeroComponent],
  exports:[ListComponent,HeroComponent],
  imports:[CommonModule]
})


export class HeroesModule{}
