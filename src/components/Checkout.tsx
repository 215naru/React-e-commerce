import { useState, useEffect, useRef } from "react"
import styles from "./Checkout.module.css"
import ProductProp from "../interfaces/ProductProp";
import CartProduct from "../interfaces/CartProduct";
export default function Checkout(props: ProductProp) {
    const { product } = props;
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    const units = useRef<HTMLInputElement>(null);
    useEffect(() => {
        let productsOnCart: CartProduct[] = [];
        const cart = localStorage.getItem("cart");
        if (cart) {
            productsOnCart = JSON.parse(cart);
        } else {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        const isInCart = productsOnCart?.find((each: CartProduct) => each.id === product.id);
        if (isInCart) {
            setQuantity(isInCart.units);
            setButton(true);
        } else {
            setQuantity(1);
            setButton(false);
        }
    }, [product.id]);
    function manageCart() {
        let productsOnCart: CartProduct[] = [];
        const cart = localStorage.getItem("cart");
        if (cart) {
            productsOnCart = JSON.parse(cart);
        }
        const isInCart = productsOnCart?.find((each: CartProduct) => each.id === product.id);
        if (!isInCart) {
            const cartProduct: CartProduct = {
                ...product,
                units: Number(units.current?.value) || 1
            };
            productsOnCart.push(cartProduct);
            setButton(true);
        } else {
            productsOnCart = productsOnCart.filter((each: CartProduct) => each.id !== product.id);
            setButton(false);
        }
        localStorage.setItem("cart", JSON.stringify(productsOnCart));
    };
    const manageUnits = () => {
        if (units.current) {
            const storedCart = localStorage.getItem("cart");
            let productsOnCart = storedCart ? JSON.parse(storedCart) : [];
            const productIndex = productsOnCart.findIndex((each) => each.id === product.id);

            if (productIndex !== -1) {
                productsOnCart[productIndex].units = Number(units.current.value);
                localStorage.setItem("cart", JSON.stringify(productsOnCart));
            }
            setQuantity(Number(units.current.value));
        }
    };
    return (
        <>
            <section className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>
                        $ {(product.price * quantity).toLocaleString()}
                    </h2>
                    <p className={styles["checkout-description"]}>
                        Includes Country tax and AFIP collection
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img src="/truck.png" alt="Truck" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                Agrega el producto al carrito para conocer los costos de
                                envío
                            </span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img src="/plane.png" alt="Plane" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                Recibí aproximadamente entre 10 y 15 días hábiles,
                                seleccionando envío normal
                            </span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input
                                id="input-quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                ref={units}
                                onChange={manageUnits}
                            />
                            <button
                                type="button"
                                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                                onClick={manageCart}
                            >
                                {button ? "Quitar del carrito" : "Añadir al carrito"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}