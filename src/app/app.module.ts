import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesService } from './countries.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { appReducer } from './state/app.reducer';
import { AppEffects } from './state/app.effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      app: appReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'Region and Country App',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  declarations: [AppComponent, DropdownComponent, CountryDetailsComponent],
  bootstrap: [AppComponent],
  providers: [CountriesService]
})
export class AppModule {}
