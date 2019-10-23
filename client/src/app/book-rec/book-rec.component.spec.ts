import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRecComponent } from './book-rec.component';

describe('BookRecComponent', () => {
  let component: BookRecComponent;
  let fixture: ComponentFixture<BookRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
