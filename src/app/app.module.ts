import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { SummonersComponent } from './tabs/summoners/summoners.component';
import { GamesComponent } from './tabs/games/games.component';
import { TournamentsComponent } from './tabs/tournaments/tournaments.component';
import { HistoricComponent } from './tabs/summoners/historic/historic.component';
import { RankComponent } from './tabs/summoners/rank/rank.component';
import { ChampionsComponent } from './tabs/summoners/champions/champions.component';
import { ShellComponent } from './shell/shell.component';
import { ToolbaarComponent } from './shell/toolbaar/toolbaar.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SummonersComponent,
    GamesComponent,
    TournamentsComponent,
    HistoricComponent,
    RankComponent,
    ChampionsComponent,
    ShellComponent,
    ToolbaarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
