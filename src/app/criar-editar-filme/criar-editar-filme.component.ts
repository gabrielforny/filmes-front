import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmesService } from '../services/filmes.service';
import { NotificacaoService } from '../services/notificacao.service';
import { Filmes } from '../shared/filmes';

@Component({
  selector: 'app-criar-editar-filme',
  templateUrl: './criar-editar-filme.component.html',
  styleUrls: ['./criar-editar-filme.component.scss']
})
export class CriarFilmeComponent {

  filmeForm: FormGroup;
  mensagemErrorDuracao: number;
  mensagemErrorTitulo: number;

  @Input() listaFilmes = [];

  constructor(
    private formBuilder: FormBuilder,
    private filmesService: FilmesService,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  public criarFormulario(): void {
    this.filmeForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      duracao: ['', [Validators.required]]
    });
  }

  public cadastrarFilme() {
    const novoFilme = this.filmeForm.getRawValue() as Filmes;

    this.filmesService.adicionarFilme(novoFilme).subscribe(() => {
      this.notificacaoService.toastrSuccess("Filme adicionado com sucesso!");
    },
      (error) => { console.log(error) }
    );
  }

  public verificarDuracao() {
    if(this.filmeForm.value?.duracao < 70 && this.filmeForm.value?.duracao !== null || this.filmeForm.value?.duracao > 600) {
      this.mensagemErrorDuracao = 1;
    } else {
      this.mensagemErrorDuracao = 0;
    }
  }
}
