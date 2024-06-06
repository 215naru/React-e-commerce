import {useState,useEffect,useRef} from "react"
import styles from "./Checkout.module.css"

interface Product{
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    colors: string[];
    onsale: boolean;
    quantity: number;
    units: number;
}

interface CheckoutProps{
    product: Product;
}

export default function Checkout({product}: CheckoutProps) {
    const [quantity,setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    const units = useRef(1);

    useEffect(()=>{
        let productsOnCart: Product[] = [];
        const cart = localStorage.getItem("cart");
        if (cart){
            productsOnCart = JSON.parse(cart);
        }else{
            localStorage.setItem("cart", JSON.stringify([]));
        }
        const isInCart = productsOnCart.find((each)=> each.id === product.id);
        if(isInCart){
            setQuantity(isInCart.units);
            setButton(true);
        } else{
            setQuantity(1);
            setButton(false);
        }
    },[product.id]);

    function manageCart() {
        let productsOnCart: Product[] = [];
        const cart = localStorage.getItem("cart");
        if(cart){
            productsOnCart = JSON.parse(cart);
        }

        const isInCart = productsOnCart.find((each)=> each.id === product.id);
        if(!isInCart){
            product.units = Number(units.current.value);
            productsOnCart.push(product);
            setButton(true);
        } else {
            productsOnCart = productsOnCart.filter((each)=>each.id !== product.id);
            setButton(false);
        }

        localStorage.setItem("cart",JSON.stringify(productsOnCart));
    };
    
    return (
        <>
            <section className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>
                        $ {(product.price*quantity).toLocaleString()}
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
                            id = "input-quantity"
                            type = "number"
                            min = "1"
                            value = {quantity}
                            ref = {units}
                            onChange = {() => setQuantity(Number(units.current.value))}
                             />
                            <button 
                                type="button" 
                                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                                onClick={manageCart}
                            >
                                {button ? "Quitar del carrito":"Añadir al carrito"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}