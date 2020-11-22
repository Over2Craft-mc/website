import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './modules/history/history.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import { DiscordComponent } from './modules/discord/discord.component';
import { NavComponent } from './modules/nav/nav.component';
import { DonnationsComponent } from './modules/donnations/donnations.component';
import { LoadingComponent } from './modules/loading/loading.component';
import { VotesComponent } from './modules/votes/votes.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    NotFoundComponent,
    DiscordComponent,
    NavComponent,
    DonnationsComponent,
    LoadingComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
