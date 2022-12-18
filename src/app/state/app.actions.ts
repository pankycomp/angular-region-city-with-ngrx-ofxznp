import { createAction, props } from '@ngrx/store';
import { CountryData } from '../models/country.model';

export const selectRegion = createAction(
  '[App PAGE] Select Region',
  props<{ selectedRegion: string }>()
);

export const selectCountry = createAction(
  '[App PAGE] Select Country',
  props<{ selectedCountry: string }>()
);

export const loadCountries = createAction(
  '[App PAGE] Load countries',
  props<{ selectedRegion: string }>()
);

export const loadCountriesSuccess = createAction(
  '[Countries API] Load Success',
  props<{ countries: CountryData[] }>()
);

export const loadCountriesFailure = createAction(
  '[Countries API] Load Fail',
  props<{ error: string }>()
);