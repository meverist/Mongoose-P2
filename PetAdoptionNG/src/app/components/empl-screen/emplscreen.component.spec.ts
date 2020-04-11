import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplscreenComponent } from './emplscreen.component';

describe('EmplscreenComponent', () => {
  let component: EmplscreenComponent;
  let fixture: ComponentFixture<EmplscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
