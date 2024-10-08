import { Link } from "react-router-dom";
import styles from "./productCard.module.css"
import { shortenText } from "../helpers/helper";

const ProductCard = ({ product }) => {
    const {price , image , title , id} = product;
	return (
		<div className={styles.card}>
			<img src={image} />
			<h3>{shortenText(title)}</h3>
			<p>{price}$</p>
			<div className={styles.actions}>
				<Link to={`/products/${id}`}>detailes</Link>
				<button>+</button>
			</div>
		</div>
	);
};

export default ProductCard;
