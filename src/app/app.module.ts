import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesOrNoButtonGroupModule } from './shared/components/yes-or-no-button-group/yes-or-no-button-group.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YesOrNoButtonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
