import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnationsComponent } from './donnations.component';

describe('DonnationsComponent', () => {
  let component: DonnationsComponent;
  let fixture: ComponentFixture<DonnationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
