import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

    {
      path: 'login-admin',
      loadChildren: () => import('./pages/login-admin/login-admin.module').then( m => m.LoginAdminModule
        )
    },
    {
      path: 'signup-admin',
      loadChildren: () => import('./pages/signup-admin/signup-admin.module').then( m => m.SignupAdminModule)
    },
    {
      path:'cliente',
      loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClienteModule)

    },
  {
    path: '',
    redirectTo: 'login-admin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
