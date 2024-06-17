import styles from "./Thumbs.module.css";
import { useState, useEffect } from "react";
import ProductProp from "../interfaces/ProductProp";

function Thumbs(props:ProductProp) {
    const {product} = props;
    const [thumb,setThumb] = useState(product.images[0] || "/mock1.jpg");
    useEffect(() => setThumb(product.images[0]),[product.id]);
    return (
        <section className={styles["product-images-block"]}>
            <div className={styles["product-images"]}>
                {product.images.map((each) => (
                    <img
                        key={each}
                        className={styles["mini-img"]}
                        src={each}
                        alt={product.title}
                        onClick={() => setThumb(each)}
                    ></img>
                ))}
            </div>
            <img
                className={styles["big-img"]}
                id="big-img"
                src={thumb}
                alt={product.title}
            ></img>
        </section>
    );
}

export default Thumbs;