import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuidoresComponent } from './contribuidores.component';

describe('ContribuidoresComponent', () => {
  let component: ContribuidoresComponent;
  let fixture: ComponentFixture<ContribuidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
