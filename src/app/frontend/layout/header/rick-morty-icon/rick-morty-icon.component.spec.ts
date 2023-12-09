import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyIconComponent } from './rick-morty-icon.component';

describe('RickMortyIconComponent', () => {
  let component: RickMortyIconComponent;
  let fixture: ComponentFixture<RickMortyIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickMortyIconComponent]
    });
    fixture = TestBed.createComponent(RickMortyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
