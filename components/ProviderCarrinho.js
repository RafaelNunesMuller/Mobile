import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export  function ProviderCarrinho({children}){
    
    const [carrinho, setCarrinho] = useState([]);

    function AddP(Product){
        setCarrinho((anterior) => [...anterior,Product])
    }
    return(
        <CarrinhoContext.Provider value={{carrinho, AddP}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho(){
    return useContext(CarrinhoContext);
}
