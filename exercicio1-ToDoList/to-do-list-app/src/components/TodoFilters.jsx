import useTarefas from "../hooks/useTarefas";

function TodoFilters() {
    const { filtro, setFiltro } = useTarefas();

    return (
        <div
            role="group"
            aria-label="Filtros de tarefas"
        >
            <button
                type="button"
                onClick={() => setFiltro("todas")}
                disabled={filtro === "todas"}
            >TODAS</button>
            <button
                type="button"
                onClick={() => setFiltro("pendentes")}
                disabled={filtro === "pendentes"}
            >PENDENTES</button>
            <button
                type="button"
                onClick={() => setFiltro("concluidas")}
                disabled={filtro === "concluidas"}
            >CONCLUIDAS</button>
        </div>
    );
}

export default TodoFilters;