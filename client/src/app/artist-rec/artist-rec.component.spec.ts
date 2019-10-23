import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRecComponent } from './artist-rec.component';

describe('ArtistRecComponent', () => {
  let component: ArtistRecComponent;
  let fixture: ComponentFixture<ArtistRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
