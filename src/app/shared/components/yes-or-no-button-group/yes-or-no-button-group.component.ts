import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-or-no-button-group',
  templateUrl: './yes-or-no-button-group.component.html',
  styleUrls: ['./yes-or-no-button-group.component.scss']
})
export class YesOrNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
