import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShannJiComponent } from './shann-ji.component';

describe('ShannJiComponent', () => {
  let component: ShannJiComponent;
  let fixture: ComponentFixture<ShannJiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShannJiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShannJiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
