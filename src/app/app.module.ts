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
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { ChartsModule } from 'ng2-charts';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { SummonersComponent } from './tabs/summoners/summoners.component';
import { TournamentsComponent } from './tabs/tournaments/tournaments.component';
import { HistoricComponent } from './tabs/summoners/historic/historic.component';
import { RankComponent } from './tabs/summoners/rank/rank.component';
import { ChampionsComponent } from './tabs/summoners/champions/champions.component';
import { ShellComponent } from './shell/shell.component';
import { DoughnutChartComponent } from './tabs/doughnut-chart/doughnut-chart.component';
import { ToolbaarComponent, ToolbarDialogDisconnect, ToolbarDialogConnect, ToolbarDialogInscription } from './shell/toolbaar/toolbaar.component';
import { SeasonsRankedComponent } from './tabs/summoners/rank/seasons-ranked/seasons-ranked.component';
import { SeasonsDraftComponent } from './tabs/summoners/rank/seasons-draft/seasons-draft.component';
import { ChampionsTableComponent } from './tabs/summoners/champions/champions-table/champions-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SummonersComponent,
    TournamentsComponent,
    HistoricComponent,
    RankComponent,
    ChampionsComponent,
    ShellComponent,
    ToolbaarComponent,
    ToolbarDialogDisconnect,
    ToolbarDialogConnect,
    ToolbarDialogInscription,
    DoughnutChartComponent,
    SeasonsRankedComponent,
    SeasonsDraftComponent,
    ChampionsTableComponent
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
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatBadgeModule,
    ChartsModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  entryComponents: [
    ToolbaarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
