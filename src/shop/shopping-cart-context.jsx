import { createContext } from "react"; 

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}, // Ensure addItemToCart is included
    updateItemQuantity: () => {}
});
