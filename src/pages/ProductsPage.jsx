import {useContext} from 'react'
import { ProductsContext } from '../context/ProductsContext'

const ProductsPage = () => {
  const data = useContext(ProductsContext)
  return (
    <div>ProductsPage : {data}</div>
  )
}

export default ProductsPage