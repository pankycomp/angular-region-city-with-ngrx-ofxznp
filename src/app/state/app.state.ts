import { Country } from '../models/country.model';
import { Region } from '../models/region.model';

// Representation of the entire app state
export interface State {
  countries: Country[];
  selectedCountry: Country;
  regions: Region[];
  selectedRegion: Region;
  error: any;
}
