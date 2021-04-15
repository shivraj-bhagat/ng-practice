import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCtoPDataComponent } from './user-cto-pdata.component';

describe('UserCtoPDataComponent', () => {
  let component: UserCtoPDataComponent;
  let fixture: ComponentFixture<UserCtoPDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCtoPDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCtoPDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
