import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCallbackComponent } from './cadastro-callback.component';

describe('CadastroCallbackComponent', () => {
  let component: CadastroCallbackComponent;
  let fixture: ComponentFixture<CadastroCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
