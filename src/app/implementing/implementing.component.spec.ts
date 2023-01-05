import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementingComponent } from './implementing.component';

describe('ImplementingComponent', () => {
  let component: ImplementingComponent;
  let fixture: ComponentFixture<ImplementingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
