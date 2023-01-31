import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmesService } from '../services/filmes.service';
import { NotificacaoService } from '../services/notificacao.service';

@Component({
  selector: 'app-excluir-filme',
  templateUrl: './excluir-filme.component.html',
  styleUrls: ['./excluir-filme.component.scss']
})
export class ExcluirFilmeComponent {

  @Input() id: number;

  loading: boolean = false;

  constructor(
    private filmesService: FilmesService,
    private notificacaoService: NotificacaoService,
    private modalService: NgbModal
  ) {}

  public excluirFilme(id: number) {
    this.filmesService.deletarFilme(id).subscribe(() => {
      this.notificacaoService.toastrSuccess("Filme removido com sucesso!");

      this.loading = true;

      setTimeout(function() {
        location.reload();
      }, 1500)
    },
      error => console.log(error)
    );
  }

  public fecharModal() {
    this.id = undefined;
    this.modalService.dismissAll();
  }
}
