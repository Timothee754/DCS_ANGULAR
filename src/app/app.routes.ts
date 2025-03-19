import { Routes } from '@angular/router';
import { Top10Component } from './top10/top10.component';
import {CinqplusgrandpardateComponent} from './cinqplusgrandpardate/cinqplusgrandpardate.component'


export const routes: Routes = [
    {path:'top10', component: Top10Component},
  {path:'cinq', component: CinqplusgrandpardateComponent},
];
