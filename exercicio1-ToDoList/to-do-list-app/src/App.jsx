import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
import { TodoProvider } from "./contexts/TodoContext.jsx";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [usuario, definirUsuario] = useState({
    nome: "",
    estaLogado: false,
  });
  const [usuariosAcessados, definirUsuariosAcessados] = useLocalStorage(
    "usuarios-acessados",
    [],
  );

  function entrarUsuario(nome) {
    const nomeNormalizado = nome.trim();

    if (!nomeNormalizado) {
      return;
    }

    definirUsuario({
      nome: nomeNormalizado,
      estaLogado: true,
    });

    definirUsuariosAcessados((usuariosAtuais) => [
      nomeNormalizado,
      ...usuariosAtuais.filter(
        (nomeAtual) => nomeAtual.toLowerCase() !== nomeNormalizado.toLowerCase(),
      ),
    ]);
  }

  return (
    <UserContext.Provider value={{ usuario, setUsuario: definirUsuario }}>
      <main className="aplicacao">
        <section className="cartao-tarefas">
          {usuario.estaLogado ? (
            <TodoProvider usuario={usuario}>
              <header className="cabecalho">
                <div>
                  <p className="etiqueta">Organização diária</p>
                  <h1>Minha Todo List</h1>
                  <p>Olá, {usuario.nome}! Acompanhe seu progresso.</p>
                </div>
                <button
                  className="botao-sair"
                  type="button"
                  onClick={() => definirUsuario({ nome: "", estaLogado: false })}
                >
                  Sair
                </button>
              </header>

              <TodoForm />
              <TodoFilters />
              <TodoList />
            </TodoProvider>
          ) : (
            <Login
              aoEntrar={entrarUsuario}
              usuariosAcessados={usuariosAcessados}
            />
          )}
        </section>
      </main>
    </UserContext.Provider>
  );
};

export default App;
