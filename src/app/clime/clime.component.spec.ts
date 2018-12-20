import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimeComponent } from './clime.component';

describe('ClimeComponent', () => {
  let component: ClimeComponent;
  let fixture: ComponentFixture<ClimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
