import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Country } from '../models/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailsComponent {
  @Input() country: Country;
}