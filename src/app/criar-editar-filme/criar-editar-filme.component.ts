import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmesService } from '../services/filmes.service';
import { Filmes } from '../shared/filmes';

@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-editar-filme.component.html',
  styleUrls: ['./criar-editar-filme.component.scss']
})
export class CriarFilmeComponent {

  filmeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private filmesService: FilmesService
  ) {}

  ngOnInit(): void {
    this.criarFormulario()
  }

  public criarFormulario(): void {
    this.filmeForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      duracao: ['', [Validators.required]]
    });
  }

  public verificarDuracao

  public cadastrarFilme() {
    const novoFilme = this.filmeForm.getRawValue() as Filmes;

    this.filmesService.adicionarFilme(novoFilme).subscribe(() => {
      location.reload();
    },
      (error) => { console.log(error) }
    );
  }
}
