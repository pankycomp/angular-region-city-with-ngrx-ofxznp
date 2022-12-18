import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.state";
import { appState } from "./app.reducer";

const getState = createFeatureSelector('app');

export const getRegions = createSelector(
  getState,
  (state: State) => state.regions
);

export const getSelectedRegion = createSelector(
  getState,
  (state: State) => state.selectedRegion
);

export const getCountries = createSelector(
  getState,
  (state: State) => state.countries
);

export const getSelectedCountry = createSelector(
  getState,
  (state: State) => state.selectedCountry
);

export const getError = createSelector(
  getState,
  (state: State) => state.error
);
