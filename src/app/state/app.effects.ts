import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CountriesService } from '../countries.service';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {

  constructor(
    private readonly actions$: Actions, 
    private readonly countriesService: CountriesService
  ) { }

  loadCountries$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AppActions.loadCountries),
        mergeMap((action) => this.countriesService.getCountries(action.selectedRegion)
          .pipe(
            map(countries => AppActions.loadCountriesSuccess({ countries })),
            catchError(error => of(AppActions.loadCountriesFailure({ error })))
          )
        )
      );
  });
}
