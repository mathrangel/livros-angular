import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos e Java.',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.',
      autores: ['Paul Deitel', 'Harvey Deitel']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Core Java for the Impatient',
      resumo: 'Os leitores familiarizados com Horstmann encontrarão nesta edição uma abordagem concisa das novidades do Java.',
      autores: ['Cay Horstmann']
    }
  ];
  private favoritos = new Set<number>();

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.reduce((maior, l) => Math.max(maior, l.codigo), 0);
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
    this.favoritos.delete(codigo);
  }

  alternarFavorito(codigo: number): void {
    if (this.favoritos.has(codigo)) {
      this.favoritos.delete(codigo);
    } else {
      this.favoritos.add(codigo);
    }
  }

  isFavorito(codigo: number): boolean {
    return this.favoritos.has(codigo);
  }
}
