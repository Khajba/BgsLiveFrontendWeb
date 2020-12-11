import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bgs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('placeholder')
  placeholder: string;

  @Input('width')
  width: string = '150px'

  @Input('maxLength')
  maxLength : number=30;

  constructor() { }

  ngOnInit(): void {
  }

}
