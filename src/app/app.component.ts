import { Component, OnInit, ViewChild } from '@angular/core';
import { XtermDirective } from '../../projects/ng-xterm/src/lib/xterm.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @ViewChild(XtermDirective, {
    static: true
  }) xterm: XtermDirective;
  title = 'ng-xterm';

  ngOnInit(): void {
    const ws = new WebSocket('ws://localhost:3000');
    this.xterm.attach(ws, true, false);
  }
}
