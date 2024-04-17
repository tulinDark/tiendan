import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";


import "./Products.css"

const Products = () => {
     const [data, setData] = useState([]);
     const { buyProducts } = useContext(dataContext);

     useEffect(() => {
          axios.get("./data.json")
               .then((res) => setData(res.data))
               .catch((error) => console.log("Error fetching data:", error));
     }, []);
     return data.map((product) => {
          return (
          
               <div className="card" key={product.id}>
                    {console.log(product.img)}
                    <img src={product.img} alt="img-product-card" className="product-car-imagen"/>
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button onClick={() => buyProducts(product)}>Buy</button>

               </div>
          
          );
          
     });
};

export default Products