import { NgModule } from '@angular/core';
import { NgXtermComponent } from './ng-xterm.component';
import { XtermDirective } from './xterm.directive';

@NgModule({
  declarations: [ NgXtermComponent, XtermDirective ],
  imports: [],
  exports: [ NgXtermComponent, XtermDirective ]
})
export class NgXtermModule {
}
