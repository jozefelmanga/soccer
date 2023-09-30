import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home-components/home/home.component';
import { NewsComponent } from './components/home-components/news/news.component';
import { NextMatchComponent } from './components/home-components/next-match/next-match.component';
import { VideosComponent } from './components/home-components/videos/videos.component';
import { BlogComponent } from './components/home-components/blog/blog.component';
import { ResumeComponent } from './components/home-components/resume/resume.component';
import { EventComponent } from './components/home-components/event/event.component';
import { AddMatchComponent } from './components/match-components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableMatchComponent } from './components/match-components/table-match/table-match.component';
import { SignUpComponent } from './components/user-components/sign-up/sign-up.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchesComponent } from './components/match-components/matches/matches.component';
import { MatchComponent } from './components/match-components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ColorDirective } from './directives/color.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './components/player-components/players/players.component';
import { PlayersTableComponent } from './components/player-components/players-table/players-table.component';
import { AddPlayerComponent } from './components/player-components/add-player/add-player.component';
import { PlayerComponent } from './components/player-components/player/player.component';
import { AddTeamComponent } from './components/team-components/add-team/add-team.component';
import { TeamComponent } from './components/team-components/team/team.component';
import { TeamsComponent } from './components/team-components/teams/teams.component';
import { TeamsTableComponent } from './components/team-components/teams-table/teams-table.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    NextMatchComponent,
    VideosComponent,
    BlogComponent,
    ResumeComponent,
    EventComponent,
    AddMatchComponent,
    TableMatchComponent,
    SignUpComponent,
    LoginComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ColorDirective,
    ReversePipe,
    PlayersComponent,
    PlayersTableComponent,
    AddPlayerComponent,
    PlayerComponent,
    AddTeamComponent,
    TeamComponent,
    TeamsComponent,
    TeamsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //TDF
    ReactiveFormsModule, //reactive form module
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
