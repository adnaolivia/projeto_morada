import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarmemoria } from './editarmemoria';

describe('Editarmemoria', () => {
  let component: Editarmemoria;
  let fixture: ComponentFixture<Editarmemoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editarmemoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editarmemoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
