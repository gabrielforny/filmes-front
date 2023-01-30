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

  public listaFilmes: Array<Filmes> = [];
  public listaFilmesCriados = [];
  public filmeId: number;

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
      this.listaFilmes = res

      this.listaFilmesCriados = this.listaFilmes;
    })
  }

  openCadastrar(content:any, id?: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });

    id ? this.salvarIdFilme(id) : '';
  }

  public salvarIdFilme(id: number) {
    return this.filmeId = id;
  }
}
