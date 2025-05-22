import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/public/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', component: NotFoundComponent },
];
