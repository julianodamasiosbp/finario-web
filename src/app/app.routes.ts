import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Rota padrão da aplicação (quando o usuário acessa http://localhost:4200/)
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // 2. Rota para o módulo de autenticação (lazy loaded)
  {
    path: 'auth', // <--- Este é o prefixo para todas as rotas DENTRO do AuthModule
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },

  // 3. Rota curinga para qualquer URL não mapeada (geralmente redireciona para login)
  { path: '**', redirectTo: 'auth/login' },
];
