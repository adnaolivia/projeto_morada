import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criarmemoria } from './criarmemoria';

describe('Criarmemoria', () => {
  let component: Criarmemoria;
  let fixture: ComponentFixture<Criarmemoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criarmemoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Criarmemoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
