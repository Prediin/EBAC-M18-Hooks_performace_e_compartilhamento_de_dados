import { memo } from "react";

function TodoItem({
    tarefa,
    altConclusao,
    removerTarefa,
    }) {

    return (
        <li>
            <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => altConclusao(tarefa.id)}
            />
            <span>{tarefa.titulo}</span>
            <button
            type="button"
            onClick={() => removerTarefa(tarefa.id)}
            >REMOVER</button>
        </li>
    );
}

export default memo(TodoItem);
