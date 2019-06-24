import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgXtermComponent } from './ng-xterm.component';

describe('NgXtermComponent', () => {
  let component: NgXtermComponent;
  let fixture: ComponentFixture<NgXtermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgXtermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgXtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
