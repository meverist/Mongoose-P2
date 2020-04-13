import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopScreenComponent } from './adop-screen.component';

describe('AdopScreenComponent', () => {
  let component: AdopScreenComponent;
  let fixture: ComponentFixture<AdopScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
