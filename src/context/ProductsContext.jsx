import { createContext, useEffect, useReducer } from "react";
import api from "../services/config";

const initialState = {
	isLoading: true,
	data: [],
	error: "",
};
const reducer = (state, action) => {
	switch (action.type) {
		case "SUCCESS":
			return { isLoading: false, data: action.payload, error: "" };
		case "FAILED":
			return { isLoading: false, data: [], error: action.payload };
	}
};
export const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
	const [products, dispatchProducts] = useReducer(reducer, initialState);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                dispatchProducts({type: "SUCCESS" , payload: await api.get("/products")})
            } catch (error) {
                dispatchProducts({type: "FAILED" , payload: error})
            }
        }
        fetchProducts()
    },[])
	return (
		<ProductsContext.Provider value={[products, dispatchProducts]}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
