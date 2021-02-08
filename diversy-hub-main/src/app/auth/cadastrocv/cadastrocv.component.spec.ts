import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocvComponent } from './cadastrocv.component';

describe('CadastrocvComponent', () => {
  let component: CadastrocvComponent;
  let fixture: ComponentFixture<CadastrocvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrocvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
