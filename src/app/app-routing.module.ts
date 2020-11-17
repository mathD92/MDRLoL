import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesComponent } from './tabs/games/games.component';


const routes: Routes = [
  { path: 'games/list', component: GamesComponent },

  { path: '**', component: AppComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
