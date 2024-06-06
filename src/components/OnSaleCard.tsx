import styles from "./OnSaleCard.module.css"
import { Link } from "react-router-dom"

export default function OnSaleCard(props){
    const {id,title,price,color,image} = props;
    return(
        <Link className={styles["product-card"]} to={"/details/" + id}>
            <img
            className={styles["product-img"]}
            src={image}
            alt={title}
            />
            <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>{title}</span>
                <span className={styles["product-description"]}>{color}</span>
                <div className={styles["product-price-block"]}>
                 <span className={styles["product-price"]}>{price}</span>
                 <span className={styles["product-discount"]}>50% off</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                    Incluye impueso País y percepción AFIP
                </div>
            </div>
        </Link>
    );
}