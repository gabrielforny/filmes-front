import { Component, Input } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { Filmes } from '../shared/filmes';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.scss']
})
export class ListarFilmeComponent {

  @Input() filterTerm: string;

  public listaFilmes: Array<Filmes> = [];
  public listaFilmesCadastrados = [];
  public idParaExclusao: number;
  public mostrCampoAdicionarFilme: boolean;

  constructor(
    private filmesService: FilmesService
  ) {}

  ngOnInit() {
    this.obterListaDeFilmes();
  }

  public mostrarCadastroFilme() {
    this.mostrCampoAdicionarFilme = !this.mostrCampoAdicionarFilme
  }

  public obterListaDeFilmes() {
    this.filmesService.obterFilmes().subscribe(res => {
      this.listaFilmes = res

      this.listaFilmesCadastrados = this.listaFilmes;
    })
  }

  public salvarIdFilme(id: number) {
    return this.idParaExclusao = id;
  }
}
