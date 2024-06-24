import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import Product from "../interfaces/Product";
import { useSelector } from "react-redux";

export default function ProductCard(props: Product) {
  const { id, title, price, colors, images } = props;
  const store = useSelector(store=>store)
  // console.log(store)
  return (
      <Link className={styles["product-card"]} to={"/details/" + id}>
        <img
          className={styles["product-img"]}
          src={images[0]}
          alt={title}
        />
        <div className={styles["p?roduct-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["product-description"]}>{colors[0]}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>{price}</span>
            <span className={styles["product-discount"]}>50% Off</span>
          </div>
          <div className={styles["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
  );
}