# Todo React Avançado

Uma aplicação de lista de tarefas desenvolvida com React para praticar estado global, hooks customizados, persistência local e otimização de renderizações.

## Funcionalidades

- Login local por nome de usuário;
- Histórico de usuários acessados, com acesso rápido por botões;
- Tarefas separadas por usuário no `localStorage`;
- Adicionar, concluir, remover e filtrar tarefas;
- Filtros para todas, pendentes e concluídas;
- Persistência das tarefas após recarregar a página;
- Layout responsivo com abordagem Mobile First;
- Favicon com emoji de confere ✅.

> O login é apenas local e demonstrativo: não utiliza senha, backend ou autenticação real.

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

O `TodoContext` centraliza o estado e as ações das tarefas. Os hooks `useTarefas` e `useLocalStorage` encapsulam o acesso ao contexto e à persistência local.

### Memoização

O projeto usa `useMemo` para calcular tarefas filtradas, `useCallback` para manter referências estáveis das ações e `React.memo` para evitar renderizações desnecessárias dos itens da lista.

### Persistência por usuário

Cada usuário possui sua própria chave no `localStorage`. Dessa forma, as tarefas de um usuário não são exibidas para outro.

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/todo-react-avancado.git
```

2. Entre na pasta do projeto:

```bash
cd todo-react-avancado
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador o endereço indicado pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev
npm run lint
npm run build
```

## Estrutura do projeto

```text
src/
├── components/
│   ├── Login.jsx
│   ├── TodoFilters.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── contexts/
│   ├── TodoContext.js
│   ├── TodoContext.jsx
│   └── UserContext.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useTarefas.jsx
├── styles/
│   └── main.scss
├── App.jsx
└── main.jsx
```
