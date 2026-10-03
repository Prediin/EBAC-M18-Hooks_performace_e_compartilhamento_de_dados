import { useEffect, useState } from "react";

function useLocalStorage(chave, valorInicial) {
    const [valor, definirValor] = useState(() => {
        try {
            const valorArmazenado = localStorage.getItem(chave);

            return valorArmazenado
                ? JSON.parse(valorArmazenado)
                : valorInicial;
        } catch (erro) {
            console.error("Não foi possível ler o localStorage:", erro);
            return valorInicial;
        }
    });

    useEffect(() => {
        localStorage.setItem(chave, JSON.stringify(valor));
    }, [chave, valor]);

    return [valor, definirValor];
}

export default useLocalStorage;
