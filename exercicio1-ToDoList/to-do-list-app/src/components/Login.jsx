import { useState } from "react";

function Login({ aoEntrar, usuariosAcessados }) {
  const [nome, definirNome] = useState("");

  function lidarComLogin(evento) {
    evento.preventDefault();

    const nomeNormalizado = nome.trim();

    if (!nomeNormalizado) {
      return;
    }

    aoEntrar(nomeNormalizado);
  }

  return (
    <form className="formulario-login" onSubmit={lidarComLogin}>
      <p className="etiqueta">Acesso rápido</p>
      <h1>Bem-vindo à sua lista</h1>
      <label htmlFor="nome-usuario">Como podemos chamar você?</label>
      <input
        id="nome-usuario"
        type="text"
        value={nome}
        onChange={(evento) => definirNome(evento.target.value)}
        placeholder="Digite seu nome"
      />
      <button type="submit">Entrar</button>

      {usuariosAcessados.length > 0 && (
        <div className="historico-usuarios">
          <p>Usuários recentes</p>
          <div className="lista-usuarios">
            {usuariosAcessados.map((nomeUsuario) => (
              <button
                key={nomeUsuario}
                type="button"
                onClick={() => aoEntrar(nomeUsuario)}
              >
                {nomeUsuario}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}

export default Login;
