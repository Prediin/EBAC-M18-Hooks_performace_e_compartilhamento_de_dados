import { useState } from "react";
import useTarefas from "../hooks/useTarefas";

function TodoForm() {
    const [titulo, setTitulo] = useState("");
    const { addTarefa } = useTarefas();

    function handleSubmit(e) {
        e.preventDefault();

        if (!titulo.trim()) {
            return;
        }

        addTarefa(titulo);
        setTitulo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo-tarefa">Nova Tarefa</label>
            <input
            id="titulo-tarefa"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex.: Estudar React amanhã"
            />
            <button type="submit">ADICIONAR</button>
        </form>
    );
}

export default TodoForm;