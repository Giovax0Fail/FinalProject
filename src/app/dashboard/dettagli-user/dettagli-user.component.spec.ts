import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliUserComponent } from './dettagli-user.component';

describe('DettagliUserComponent', () => {
  let component: DettagliUserComponent;
  let fixture: ComponentFixture<DettagliUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
