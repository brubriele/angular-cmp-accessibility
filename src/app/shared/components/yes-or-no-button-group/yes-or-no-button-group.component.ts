import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yes-or-no-button-group',
  templateUrl: './yes-or-no-button-group.component.html',
  styleUrls: ['./yes-or-no-button-group.component.scss']
})
export class YesOrNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output()  public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value)
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
