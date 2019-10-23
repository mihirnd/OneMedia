import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRecComponent } from './song-rec.component';

describe('SongRecComponent', () => {
  let component: SongRecComponent;
  let fixture: ComponentFixture<SongRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
