import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSinComponent } from './form-sin.component';

describe('FormSinComponent', () => {
  let component: FormSinComponent;
  let fixture: ComponentFixture<FormSinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
