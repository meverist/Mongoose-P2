import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddPetComponent } from './employee-add-pet.component';

describe('EmployeeAddPetComponent', () => {
  let component: EmployeeAddPetComponent;
  let fixture: ComponentFixture<EmployeeAddPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
