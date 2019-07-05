import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuidorComponent } from './contribuidor.component';

describe('ContribuidorComponent', () => {
  let component: ContribuidorComponent;
  let fixture: ComponentFixture<ContribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
