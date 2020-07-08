import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorksRoutingModule} from './works-routing.module';
import {WorksComponent} from './works.component';
import {AllProjectsComponent} from './all-projects/all-projects.component';
import {AngularProjectsComponent} from './angular-projects/angular-projects.component';
import {WebDesignProjectsComponent} from './web-design-projects/web-design-projects.component';
import {PostgresProjectsComponent} from './postgres-projects/postgres-projects.component';
import {GamesProjectsComponent} from './games-projects/games-projects.component';
import {LaravelProjectsComponent} from './laravel-projects/laravel-projects.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [WorksComponent, AllProjectsComponent, AngularProjectsComponent, WebDesignProjectsComponent, PostgresProjectsComponent, GamesProjectsComponent, LaravelProjectsComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    MatSidenavModule,
    MatTabsModule,
    FlexModule,
    FlexLayoutModule
  ]
})
export class WorksModule {
}
