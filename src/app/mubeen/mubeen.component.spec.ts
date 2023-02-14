import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MubeenComponent } from './mubeen.component';

describe('MubeenComponent', () => {
  let component: MubeenComponent;
  let fixture: ComponentFixture<MubeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MubeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MubeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
