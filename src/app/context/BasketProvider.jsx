"use client";
import { createContext, useContext, useState } from "react";
const BasketContext = createContext();
export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  return (
    <BasketContext.Provider value={[basket, setBasket]}>
      {children}
    </BasketContext.Provider>
  );
}
export const useBasket = () => useContext(BasketContext);