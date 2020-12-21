import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bgs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input('type')
  type: string;

  @Input('placeholder')
  placeholder: string=''

  @Input('width')
  width: string = '150px'

  @Input('height')
  height: string = '25px'

  @Input('maxLength')
  maxLength: number = 30;

  value: any;
  onChange: (val: any) => void;
  onTouched: () => void;
  isDisabled: boolean;
  isRequired: boolean;

  constructor() { }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setRequiredState?(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  onInput(val: any) {
    this.onChange(val);
  }
}
