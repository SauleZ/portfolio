import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./layout/modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'works',
    loadChildren: () => import('./layout/modules/works/works.module').then(m => m.WorksModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./layout/modules/about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
