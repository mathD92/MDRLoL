import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsTableComponent } from './champions-table.component';

describe('ChampionsTableComponent', () => {
  let component: ChampionsTableComponent;
  let fixture: ComponentFixture<ChampionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
