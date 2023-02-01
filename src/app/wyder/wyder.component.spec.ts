import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyderComponent } from './wyder.component';

describe('WyderComponent', () => {
  let component: WyderComponent;
  let fixture: ComponentFixture<WyderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
