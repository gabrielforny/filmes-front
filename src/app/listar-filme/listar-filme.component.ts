import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmesService } from '../services/filmes.service';
import { Filmes } from '../shared/filmes';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.scss']
})
export class ListarFilmeComponent {

  @Input() filterTerm: string;

  public listaFilmesCriados = [];
  public filmeId: number;

  public escolhaFiltro: string = "";

  closeResult: string = '';

  constructor(
    private filmesService: FilmesService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.obterListaDeFilmes();
  }

  public obterListaDeFilmes() {
    this.filmesService.obterFilmes().subscribe(res => {
      this.listaFilmesCriados = res;
    })
  }

  public tipoOrdenacao() {
    switch(this.escolhaFiltro) {
      case "1":
        this.ordenarPorTitulo();
      break;

      case "2":
        this.ordenarPorGenero();
      break;

      case "3":
        this.ordenarPorDuracao();
      break;
    }
  }

  public ordenarPorTitulo() {

    this.listaFilmesCriados.sort(function (a, b) {
      if (a.titulo.toUpperCase() > b.titulo.toUpperCase()) {
        return 1;
      }
      if (a.titulo.toUpperCase() < b.titulo.toUpperCase()) {
        return -1;
      }
      return 0;
    });
  }

  public ordenarPorGenero() {
    this.listaFilmesCriados.sort(function (a, b) {
      if (a.genero.toUpperCase() > b.genero.toUpperCase()) {
        return 1;
      }
      if (a.genero.toUpperCase() < b.genero.toUpperCase()) {
        return -1;
      }
      return 0;
    });
  }

  public ordenarPorDuracao() {
    this.listaFilmesCriados.sort(function (a, b) {
      if (a.duracao > b.duracao) {
        return 1;
      }
      if (a.duracao < b.duracao) {
        return -1;
      }
      return 0;
    });

    this.listaFilmesCriados;
  }

  public openCadastrar(content:any, id?: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });

    id ? this.salvarIdFilme(id) : '';
  }

  public salvarIdFilme(id: number) {
    return this.filmeId = id;
  }
}
