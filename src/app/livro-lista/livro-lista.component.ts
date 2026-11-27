import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  public somenteFavoritos: boolean = false;

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  get livrosExibidos(): Array<Livro> {
    return this.somenteFavoritos
      ? this.livros.filter(l => this.servLivros.isFavorito(l.codigo))
      : this.livros;
  }

  alternarFavorito = (codigo: number): void => {
    this.servLivros.alternarFavorito(codigo);
  };

  isFavorito = (codigo: number): boolean => {
    return this.servLivros.isFavorito(codigo);
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
