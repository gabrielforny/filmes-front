import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filmes } from "../shared/filmes";

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http: HttpClient) {}

  obterFilmes(): Observable<Array<Filmes>> {
    return this.http.get<Array<Filmes>>(`/api/filme`);
  }

  adicionarFilme(filme: Filmes): Observable<Filmes> {
    return this.http.post<Filmes>(`/api/filme`, filme);
  }

  excluirFilme(id: number): Observable<Filmes> {
    return this.http.delete<Filmes>(`/api/filme/${id}`)
  }
}
