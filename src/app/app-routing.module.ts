import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-components/home/home.component';
import { AddMatchComponent } from './components/match-components/add-match/add-match.component';
import { TableMatchComponent } from './components/match-components/table-match/table-match.component';
import { SignUpComponent } from './components/user-components/sign-up/sign-up.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { MatchesComponent } from './components/match-components/matches/matches.component';
import { AuthGuard } from './guards/auth.guard';
import { PlayersComponent } from './components/player-components/players/players.component';
import { AddPlayerComponent } from './components/player-components/add-player/add-player.component';
import { PlayersTableComponent } from './components/player-components/players-table/players-table.component';
import { TeamsTableComponent } from './components/team-components/teams-table/teams-table.component';
import { AddTeamComponent } from './components/team-components/add-team/add-team.component';
import { TeamsComponent } from './components/team-components/teams/teams.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'addMatch', component: AddMatchComponent, canActivate: [AuthGuard] },
  {
    path: 'tableMatch',
    component: TableMatchComponent,
    canActivate: [AuthGuard],
  },
  { path: 'matches', component: MatchesComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'addMatch/:id',
    component: AddMatchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'players',
    component: PlayersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addPlayer',
    component: AddPlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addPlayer/:id',
    component: AddPlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tablePlayers',
    component: PlayersTableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addTeam',
    component: AddTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addTeam/:id',
    component: AddTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tableTeams',
    component: TeamsTableComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
