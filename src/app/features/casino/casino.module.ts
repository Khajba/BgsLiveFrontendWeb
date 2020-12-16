import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoComponent } from './casino.component';
import { CasinoRoutingModule } from './casino.routing.module';
import { RouletteComponent } from './roulette/roulette.component';



@NgModule({
  declarations: [CasinoComponent, RouletteComponent],
  imports: [
    CommonModule,
    CasinoRoutingModule
  ]
})
export class CasinoModule { }
