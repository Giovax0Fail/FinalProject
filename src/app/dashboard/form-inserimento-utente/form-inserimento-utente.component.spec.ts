import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInserimentoUtenteComponent } from './form-inserimento-utente.component';

describe('FormInserimentoUtenteComponent', () => {
  let component: FormInserimentoUtenteComponent;
  let fixture: ComponentFixture<FormInserimentoUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInserimentoUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInserimentoUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
