# Catálogo de Livros (livros-angular)

Trabalho prático da disciplina **DGT2809 Aprofundamento em Desenvolvimento Front-End** (Estácio).

**Aluno:** Matheus Rangel Lanatovitz da Silva · **Matrícula:** 202303287755

## Funcionalidades

- Listagem de livros com título, resumo, editora e autores
- Exclusão de livros
- Cadastro de livros com validação HTML 5 (`ngNativeValidate`)
- Navegação entre páginas com Angular Router (`/lista`, `/dados`, `/autores`)
- Favoritar livros e filtrar apenas os favoritos
- Página de autores com os livros de cada autor

## Tecnologias

- Angular 19 (NgModule, FormsModule, RouterModule)
- TypeScript
- Bootstrap 5.3 (tema Bootswatch Lux) e Bootstrap Icons

## Estrutura

| Arquivo | Descrição |
|---|---|
| `src/app/livro.ts` / `editora.ts` | Entidades Livro e Editora |
| `src/app/controle-livros.service.ts` | Serviço com `obterLivros`, `incluir` e `excluir` |
| `src/app/controle-editora.service.ts` | Serviço com `getEditoras` e `getNomeEditora` |
| `src/app/livro-lista/` | Componente de listagem |
| `src/app/livro-dados/` | Componente de cadastro |
| `src/app/autor-lista/` | Componente de livros por autor |

## Como executar

```bash
npm install
npx ng serve
```

Acesse http://localhost:4200/ no navegador.

## Testes

```bash
npx ng test
```
