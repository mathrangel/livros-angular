import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

interface AutorLivros {
  autor: string;
  livros: Array<Livro>;
}

@Component({
  selector: 'app-autor-lista',
  standalone: false,
  templateUrl: './autor-lista.component.html',
  styleUrl: './autor-lista.component.css'
})
export class AutorListaComponent implements OnInit {
  public autores: Array<AutorLivros> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    const mapa = new Map<string, Array<Livro>>();
    for (const livro of this.servLivros.obterLivros()) {
      for (const autor of livro.autores) {
        mapa.set(autor, [...(mapa.get(autor) ?? []), livro]);
      }
    }
    this.autores = [...mapa.entries()]
      .map(([autor, livros]) => ({ autor, livros }))
      .sort((a, b) => a.autor.localeCompare(b.autor));
  }

  isFavorito = (codigo: number): boolean => {
    return this.servLivros.isFavorito(codigo);
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
