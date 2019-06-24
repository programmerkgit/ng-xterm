import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgXtermModule } from '../../projects/ng-xterm/src/lib/ng-xterm.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgXtermModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
