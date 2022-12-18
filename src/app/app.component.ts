import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as AppActions from "./state/app.actions";
import { Country } from "./models/country.model";
import { DropdownChangeValue } from "./models/dropdown.model";
import {
  getCountries,
  getRegions,
  getSelectedCountry,
  getSelectedRegion,
} from "./state/app.selectors";
import { Region } from "./models/region.model";
import { State } from "./state/app.state";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  regions$: Observable<Region> = this.store.select(getRegions);
  countries$: Observable<Array<Country>> = this.store.select(getCountries);
  selectedRegion$: Observable<Region> = this.store.select(getSelectedRegion);
  selectedCountry$: Observable<Country> = this.store.select(getSelectedCountry);

  constructor(
    private readonly store: Store<State>
  ) {}

  handleOptionChange({ label, value }: DropdownChangeValue) {
    if (label === "Regions") {
       this.store.dispatch(AppActions.selectRegion({ selectedRegion: value }))
       this.store.dispatch(AppActions.loadCountries({ selectedRegion: value}))
    } else {
      this.store.dispatch(AppActions.selectCountry({ selectedCountry: value }));
    }
  }
}
