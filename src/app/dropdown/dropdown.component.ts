import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

import { Country } from "../models/country.model";
import { DropdownChangeValue } from "../models/dropdown.model";
import { Region } from "../models/region.model";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  @Input() label: string;
  @Input() optionsList: Array<Region | Country>;
  @Input() defaultSelection: string;
  @Output() optionChange = new EventEmitter<DropdownChangeValue>();

  onOptionChange(value) {
    this.optionChange.emit({
      label: this.label,
      value
    });
  }
}
