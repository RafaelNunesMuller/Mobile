import { Children, createContext, useContext, useState } from "react";
import Product from "../screen/products";

const CarrinhoContext = createContext();

export default ProviderCart(Children){
    
    const [carrinho, setCarrinho] = useState([]);

    function AddP(Product){
        setCarrinho((anterior) => [...anterior,Product])
    }
    
    return(
        <CarrinhoContext.Provider value={{carrinho, AddP}}>
            {Children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho(){
    return useContext(CarrinhoContext);
}