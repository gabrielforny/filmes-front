import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFilmeComponent } from './excluir-filme.component';

describe('ExcluirFilmeComponent', () => {
  let component: ExcluirFilmeComponent;
  let fixture: ComponentFixture<ExcluirFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
