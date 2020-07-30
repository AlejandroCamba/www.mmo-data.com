import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionWrapperComponent } from './option-wrapper.component';

describe('OptionWrapperComponent', () => {
  let component: OptionWrapperComponent;
  let fixture: ComponentFixture<OptionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
