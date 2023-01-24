import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffineComponent } from './offine.component';

describe('OffineComponent', () => {
  let component: OffineComponent;
  let fixture: ComponentFixture<OffineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
