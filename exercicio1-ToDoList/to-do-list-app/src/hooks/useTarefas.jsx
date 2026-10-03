import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext.js";

function useTarefas() {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error(
            "useTarefas deve ser usado dentro de TodoProvider",
        );
    }

    return context;
}

export default useTarefas;