import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsRankedComponent } from './seasons-ranked.component';

describe('SeasonsRankedComponent', () => {
  let component: SeasonsRankedComponent;
  let fixture: ComponentFixture<SeasonsRankedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonsRankedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsRankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
