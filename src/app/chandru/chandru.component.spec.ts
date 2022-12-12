import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandruComponent } from './chandru.component';

describe('ChandruComponent', () => {
  let component: ChandruComponent;
  let fixture: ComponentFixture<ChandruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
