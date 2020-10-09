import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsDraftComponent } from './seasons-draft.component';

describe('SeasonsDraftComponent', () => {
  let component: SeasonsDraftComponent;
  let fixture: ComponentFixture<SeasonsDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonsDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
