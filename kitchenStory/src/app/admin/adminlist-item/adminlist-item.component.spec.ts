import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistItemComponent } from './adminlist-item.component';

describe('AdminlistItemComponent', () => {
  let component: AdminlistItemComponent;
  let fixture: ComponentFixture<AdminlistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
