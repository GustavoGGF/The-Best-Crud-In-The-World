import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCheckboxComponent } from './profile-checkbox.component';

describe('ProfileCheckboxComponent', () => {
  let component: ProfileCheckboxComponent;
  let fixture: ComponentFixture<ProfileCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
