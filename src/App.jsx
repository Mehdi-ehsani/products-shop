import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailes from "./pages/ProductDetailes";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ProductsProvider from "./context/ProductsContext";
function App() {
	return (
		<ProductsProvider>
			<Routes>
				<Route path="/" element={<Navigate to="/products" replace />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/products/:id" element={<ProductDetailes />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</ProductsProvider>
	);
}

export default App;
