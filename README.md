# Todo React Avançado

Projeto de lista de tarefas desenvolvido com React como exercício prático de estado global, hooks customizados, persistência local e otimização de renderizações.

## Funcionalidades

- Login local por nome de usuário;
- Histórico de usuários acessados com botões de acesso rápido;
- Tarefas separadas por usuário no `localStorage`;
- Adicionar, concluir, remover e filtrar tarefas;
- Filtros para todas, pendentes e concluídas;
- Persistência após recarregar a página;
- Layout responsivo com abordagem Mobile First;
- Favicon com emoji de confere ✅.

> O login é apenas demonstrativo e local: não há senha, backend ou autenticação real.

## Tecnologias utilizadas

- React;
- Vite;
- JavaScript;
- Sass;
- Context API;
- `useState`, `useEffect`, `useContext`, `useMemo` e `useCallback`;
- `React.memo`;
- `localStorage`.

## Conceitos praticados

### Context API e hooks customizados

O `TodoContext` centraliza o estado e as ações das tarefas. Os hooks `useTarefas` e `useLocalStorage` encapsulam, respectivamente, o acesso ao contexto e a persistência local.

### Memoização

O projeto usa `useMemo` para calcular a lista filtrada, `useCallback` para manter ações estáveis e `React.memo` para reduzir renderizações desnecessárias dos itens.

### Persistência por usuário

Cada usuário utiliza uma chave própria no `localStorage`. Dessa forma, tarefas cadastradas por um usuário não aparecem para outro.

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/Prediin/EBAC-M18-Hooks_performace_e_compartilhamento_de_dados.git
```

2. Entre na pasta da aplicação:

```bash
cd EBAC-M18-Hooks_performace_e_compartilhamento_de_dados/exercicio1-ToDoList/to-do-list-app
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev
npm run lint
npm run build
```

## Estrutura do projeto

```text
exercicio1-ToDoList/
└── to-do-list-app/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Login.jsx
    │   │   ├── TodoFilters.jsx
    │   │   ├── TodoForm.jsx
    │   │   ├── TodoItem.jsx
    │   │   └── TodoList.jsx
    │   ├── contexts/
    │   ├── hooks/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── README.md
```
