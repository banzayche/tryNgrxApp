import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ApiService, apiServiceCreator } from './common/http/api.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './store/redusers/counter';
import { authorizeReducer } from './store/redusers/authorize';
import { AuthEffects } from './store/effects/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    TileListComponent,
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer, user: authorizeReducer}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    {
      provide: ApiService,
      useFactory: apiServiceCreator,
      deps: [HttpClient]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
