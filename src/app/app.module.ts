import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
;


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { SummonersComponent } from './tabs/summoners/summoners.component';
import { GamesComponent } from './tabs/games/games.component';
import { TournamentsComponent } from './tabs/tournaments/tournaments.component';
import { HistoricComponent } from './tabs/summoners/historic/historic.component';
import { RankComponent } from './tabs/summoners/rank/rank.component';
import { ChampionsComponent } from './tabs/summoners/champions/champions.component';
import { ShellComponent } from './shell/shell.component';
import { ToolbaarComponent, ToolbarDialogDisconnect, ToolbarDialogConnect, ToolbarDialogInscription } from './shell/toolbaar/toolbaar.component';
import { FormsComponent } from './shell/forms/forms.component';


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
    FormsComponent,
    ToolbarDialogDisconnect,
    ToolbarDialogConnect,
    ToolbarDialogInscription
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
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    ToolbaarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
