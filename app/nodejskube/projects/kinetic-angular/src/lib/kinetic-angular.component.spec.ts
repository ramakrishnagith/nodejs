import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KineticAngularComponent } from './kinetic-angular.component';

describe('KineticAngularComponent', () => {
  let component: KineticAngularComponent;
  let fixture: ComponentFixture<KineticAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KineticAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KineticAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
