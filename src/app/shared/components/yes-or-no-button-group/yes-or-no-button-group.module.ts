import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoButtonGroupComponent } from './yes-or-no-button-group.component';



@NgModule({
  declarations: [YesOrNoButtonGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [YesOrNoButtonGroupComponent]
})
export class YesOrNoButtonGroupModule { }
