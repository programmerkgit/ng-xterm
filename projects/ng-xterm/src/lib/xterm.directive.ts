import { Directive, ElementRef, OnInit } from '@angular/core';
import { Terminal } from 'xterm';
import { fit } from 'xterm/lib/addons/fit/fit';
import { attach } from 'xterm/lib/addons/attach/attach';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[nxtXterm]',
})
export class XtermDirective implements OnInit {


  socket: WebSocket;
  term: Terminal = new Terminal({rows: 20, cols: 150});

  constructor(
    private el: ElementRef,
  ) {
  }

  reset() {
    this.term.reset();
  }

  clear() {
    this.term.clear();
  }

  attach(socket: WebSocket, bidirectional: boolean = false, buffered: boolean = false) {
    this.socket = socket;
    attach(this.term, socket, bidirectional, buffered);
  }

  setOption(key: string, value: any) {
    this.term.setOption(key, value);
  }

  fit() {
    fit(this.term);
  }

  write(text: string): void {
    this.term.write(text);
  }

  open(element: HTMLElement) {
    this.term.open(element);
  }

  ngOnInit() {
    this.open(this.el.nativeElement);
    this.fit();
  }


}
