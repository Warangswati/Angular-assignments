import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaingSystemComponent } from './operaing-system.component';

describe('OperaingSystemComponent', () => {
  let component: OperaingSystemComponent;
  let fixture: ComponentFixture<OperaingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperaingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
