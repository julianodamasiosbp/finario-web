import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/public/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotFoundComponent },
];
