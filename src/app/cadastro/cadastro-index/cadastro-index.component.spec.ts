import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIndexComponent } from './cadastro-index.component';

describe('CadastroIndexComponent', () => {
  let component: CadastroIndexComponent;
  let fixture: ComponentFixture<CadastroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
