import { Component, Input } from '@angular/core';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-excluir-filme',
  templateUrl: './excluir-filme.component.html',
  styleUrls: ['./excluir-filme.component.scss']
})
export class ExcluirFilmeComponent {

  @Input() id: number;

  constructor(
    private filmesService: FilmesService
  ) {}

  public excluirFilme(id: number) {
    this.filmesService.excluirFilme(id).subscribe(() => {
      location.reload();
    },
      error => console.log(error)
    );
  }
}
