import { useState, useCallback } from "react";
import { TodoContext } from "./TodoContext.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

export function TodoProvider({ children, usuario }) {
    const chaveTarefas = `tarefas-${usuario.nome.trim().toLowerCase()}`;
    const [tarefas, setTarefas] = useLocalStorage(chaveTarefas, []);
    const [filtro, setFiltro] = useState("todas");

    const addTarefa = useCallback((titulo) => {
        const tituloNormalizado = titulo.trim();

        if (!tituloNormalizado) {
            return;
        }

        const novaTarefa = {
            id: crypto.randomUUID(),
            titulo: tituloNormalizado,
            concluida: false,
        }

        setTarefas((tarefasAtuais) => [
            ...tarefasAtuais,
            novaTarefa,
        ]);
    }, [setTarefas]);

    const altConclusao = useCallback((id) => {
        setTarefas((tarefasAtuais) =>
            tarefasAtuais.map((tarefa) =>
                tarefa.id === id
                ? {
                    ...tarefa,
                    concluida: !tarefa.concluida
                }
                : tarefa,
            ),
        );
    }, [setTarefas]);

    const removerTarefa = useCallback((id) => {
        setTarefas((tarefasAtuais) =>
            tarefasAtuais.filter((tarefa) => tarefa.id !== id),
        );
    }, [setTarefas]);

    const value = {
        tarefas,
        setTarefas,
        filtro,
        setFiltro,
        addTarefa,
        altConclusao,
        removerTarefa,
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};
