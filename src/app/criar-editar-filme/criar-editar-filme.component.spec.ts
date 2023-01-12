import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFilmeComponent } from './criar-editar-filme.component';

describe('CriarFilmeComponent', () => {
  let component: CriarFilmeComponent;
  let fixture: ComponentFixture<CriarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
