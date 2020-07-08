import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllProjectsComponent} from './all-projects/all-projects.component';
import {AngularProjectsComponent} from './angular-projects/angular-projects.component';
import {WebDesignProjectsComponent} from './web-design-projects/web-design-projects.component';
import {GamesProjectsComponent} from './games-projects/games-projects.component';
import {LaravelProjectsComponent} from './laravel-projects/laravel-projects.component';
import {WorksComponent} from './works.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainWorks'
  },
  {
    path: 'mainWorks',
    component: WorksComponent
  },
  {
    path: 'all',
    component: AllProjectsComponent
  },
  {
    path: 'angular',
    component: AngularProjectsComponent
  },
  {
    path: 'web',
    component: WebDesignProjectsComponent
  },
  {
    path: 'games',
    component: GamesProjectsComponent
  },
  {
    path: 'laravel',
    component: LaravelProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {
}
