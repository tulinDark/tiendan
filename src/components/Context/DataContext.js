import { createContext , useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

export const DataProvider = ({ children }) => {
     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
     const [cart, setCart] = useState(savedCart);
 
     useEffect(() => {
         localStorage.setItem("cart", JSON.stringify(cart));
     }, [cart]);
     
     const buyProducts = (product) => {
          const productorepeat = cart.find((item)=> item.id === product.id)

          if(productorepeat){
               setCart(cart.map((item)=> (item.id ===product.id ?{...product, quanty: productorepeat.quanty + 1}: item)))
          }else{
               setCart([...cart, product])
          }
     }


     return <dataContext.Provider value={{cart, setCart , buyProducts }}>{children}</dataContext.Provider>;
};

export default DataProvider;


