import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcreactComponent } from './arcreact.component';

describe('ArcreactComponent', () => {
  let component: ArcreactComponent;
  let fixture: ComponentFixture<ArcreactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcreactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
