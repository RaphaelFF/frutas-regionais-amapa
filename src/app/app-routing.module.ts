import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'acai',
    loadChildren: () => import('./acai/acai.module').then( m => m.AcaiPageModule)
  },
  {
    path: 'doencas',
    loadChildren: () => import('./acai/doencas/doencas.module').then( m => m.DoencasPageModule)
  },
  {
    path: 'pragas',
    loadChildren: () => import('./acai/pragas/pragas.module').then( m => m.PragasPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
