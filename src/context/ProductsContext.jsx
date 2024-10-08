import {createContext} from 'react'

export const ProductsContext = createContext()  
const ProductsProvider = ({children}) => {
  return (
    <ProductsContext.Provider value="metti">
       {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider