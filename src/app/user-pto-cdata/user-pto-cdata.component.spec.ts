import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPtoCDataComponent } from './user-pto-cdata.component';

describe('UserPtoCDataComponent', () => {
  let component: UserPtoCDataComponent;
  let fixture: ComponentFixture<UserPtoCDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPtoCDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPtoCDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
