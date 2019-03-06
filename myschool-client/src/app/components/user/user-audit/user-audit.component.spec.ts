import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuditComponent } from './user-audit.component';

describe('UserAuditComponent', () => {
  let component: UserAuditComponent;
  let fixture: ComponentFixture<UserAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
