import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import {HistoryComponent} from './modules/history/history.component';
import {NotFoundComponent} from './modules/not-found/not-found.component';
import {DonnationsComponent} from './modules/donnations/donnations.component';
import {VotesComponent} from './modules/votes/votes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'dons', component: DonnationsComponent },
  { path: 'votes', component: VotesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
