import { createContext, useEffect, useState } from "react";

// Creación del context //
export const PizzasContext = createContext();

// Provider con la fuente de datos //
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  // Obtener las pizzas //
  const getPizzas = async () => {
    const res = await fetch("./pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  // Funciones para el carro //
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };
//si ya existe la pizza solo agregar un contador //
    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      // si no agrega la pizza encontrada //
      setCarrito([...carrito, producto]);
    }
  };
// incrementa el contador //
  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };
// decrementa el contador hasta borrar la pizza si es menor a 1 //
  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
