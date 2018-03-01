import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutIndexComponent } from './logout-index.component';

describe('LogoutIndexComponent', () => {
  let component: LogoutIndexComponent;
  let fixture: ComponentFixture<LogoutIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
