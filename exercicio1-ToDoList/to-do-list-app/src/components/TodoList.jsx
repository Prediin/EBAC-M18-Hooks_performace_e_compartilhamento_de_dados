import useTarefas from "../hooks/useTarefas";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

function TodoList() {
    const {
        tarefas,
        filtro,
        altConclusao,
        removerTarefa,
    } = useTarefas();
    const tarefasFiltradas = useMemo(() => {
        if(filtro === "concluidas") {
            return tarefas.filter((tarefa) => tarefa.concluida)
        }

        if(filtro === "pendentes") {
            return tarefas.filter((tarefa) => !tarefa.concluida)
        }

        return tarefas;
    }, [tarefas, filtro]);

    if (tarefasFiltradas.length === 0) {
        return <p>Nenhuma tarefa cadastrada...</p>;
    };

    return (
        <ul>
            {tarefasFiltradas.map((tarefa) => (
                <TodoItem
                key={tarefa.id}
                tarefa={tarefa}
                altConclusao={altConclusao}
                removerTarefa={removerTarefa}
                />
            ))}
        </ul>
    );
}

export default TodoList;