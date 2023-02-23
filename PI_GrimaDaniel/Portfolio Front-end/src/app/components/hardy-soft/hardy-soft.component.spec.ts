import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardySoftComponent } from './hardy-soft.component';

describe('HardySoftComponent', () => {
  let component: HardySoftComponent;
  let fixture: ComponentFixture<HardySoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardySoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardySoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
