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

  obterFilmePorId(id: number): Observable<Array<Filmes>> {
    return this.http.get<Array<Filmes>>(`/api/filme/${id}`)
  }

  criarFilme(filme: Filmes): Observable<Filmes> {
    return this.http.post<Filmes>(`/api/filme`, filme);
  }

  atualizarFilme(id: number, filmes: Filmes): Observable<Filmes> {
    return this.http.put<Filmes>(`/api/filme/${id}`, filmes)
  }

  deletarFilme(id: number): Observable<Filmes> {
    return this.http.delete<Filmes>(`/api/filme/${id}`)
  }
}
