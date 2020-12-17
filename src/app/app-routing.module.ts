import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthGuard } from './core/authorization/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => ((await import('./features/main-page/main-page.module')).MainPageModule)

  },
  {
    path: 'casino',
    loadChildren: async () => ((await import('./features/casino/casino.module')).CasinoModule)
  },
  {
    path: 'slot',
    loadChildren: async () => ((await (await import('./features/slot/slot.module')).SlotModule))
  },
  {
    path: 'user',
    loadChildren: async () => ((await import('./features/user/user.module')).UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
