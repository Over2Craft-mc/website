import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Over2stationComponent } from './over2station.component';

describe('Over2stationComponent', () => {
  let component: Over2stationComponent;
  let fixture: ComponentFixture<Over2stationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Over2stationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Over2stationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
