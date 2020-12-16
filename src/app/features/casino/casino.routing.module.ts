import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CasinoComponent } from './casino.component';
import { RouletteComponent } from './roulette/roulette.component';

const routes: Routes = [
    { path: '', component: CasinoComponent },
    { path: 'roulette', component: RouletteComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class CasinoRoutingModule {

}