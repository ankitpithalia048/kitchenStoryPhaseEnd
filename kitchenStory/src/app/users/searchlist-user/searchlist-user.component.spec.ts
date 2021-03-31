import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistUserComponent } from './searchlist-user.component';

describe('SearchlistUserComponent', () => {
  let component: SearchlistUserComponent;
  let fixture: ComponentFixture<SearchlistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchlistUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
