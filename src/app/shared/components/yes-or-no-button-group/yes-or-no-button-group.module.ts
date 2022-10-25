import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoButtonGroupComponent } from './yes-or-no-button-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';



@NgModule({
  declarations: [YesOrNoButtonGroupComponent],
  imports: [
    CommonModule,
    KeyboardManagerModule
  ],
  exports: [YesOrNoButtonGroupComponent]
})
export class YesOrNoButtonGroupModule { }
