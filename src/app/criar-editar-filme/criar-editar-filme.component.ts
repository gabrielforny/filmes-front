import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  buttonName: string;
  titleModal: string;

  filmeEditar: any;

  loading: boolean = false;
  conteudoModalLoagind: string;

  @Input() listaFilmes = [];
  @Input() id: number;

  constructor(
    private formBuilder: FormBuilder,
    private filmesService: FilmesService,
    private notificacaoService: NotificacaoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.verificaSePossuiDado();
    this.criarFormulario();
  }

  public criarFormulario(): void {
    this.filmeForm = this.formBuilder.group({
      id: [null],
      titulo: ['', [Validators.required]],
      genero: ['', [Validators.required, Validators.maxLength(50)]],
      duracao: ['', [Validators.required]]
    });
  }

  public verificaSePossuiDado() {
    if(this.id === undefined) {
      this.buttonName = 'Cadastrar';
      this.titleModal = 'Cadastro';
    } else {
      this.buttonName = 'Editar';
      this.titleModal = 'Edição';
      this.obterFilmeEditar();
    }
  }

  public obterFilmeEditar() {
    this.filmesService.obterFilmePorId(this.id).subscribe(res => {
      this.filmeEditar = res;

      this.filmeForm = this.formBuilder.group(this.filmeEditar);
    })
  }

  public ehCadastroOuEdicao(){
    !this.id ? this.cadastrarFilme() : this.editarFilme(this.id);
  };

  public cadastrarFilme() {
    const novoFilme = this.filmeForm.getRawValue() as Filmes;

    this.filmesService.criarFilme(novoFilme).subscribe(() => {
      this.notificacaoService.toastrSuccess("Filme adicionado com sucesso!");

      this.conteudoModalLoagind = 'Criando filme';
      this.loading = true;

      setTimeout(function() {
        location.reload();
      }, 1500)
    },
      (error) => { console.log(error) }
    );
  }

  public editarFilme(id: number) {
    const novoFilme = this.filmeForm.getRawValue() as Filmes;

    this.filmesService.atualizarFilme(id, novoFilme).subscribe(() => {
      this.notificacaoService.toastrSuccess("Filme atualizado com sucesso!");

      this.conteudoModalLoagind = 'Editando filme';
      this.loading = true;

      setTimeout(function() {
        location.reload();
      }, 1500)
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


  public fecharModal() {
    this.id = undefined;
    this.modalService.dismissAll();
  }
}
