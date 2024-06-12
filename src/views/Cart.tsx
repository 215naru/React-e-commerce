import styles from "./Cart.module.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CartCard from "../components/CartCard"

export default function Cart() {
    return (
        <>
            <NavBar />
            <Hero first = "mi" second = "carrito" />
            <main>
                <CartCard/>
                <div className={styles["cart-resume"]}>
                    <div className={styles["cart-data"]}>
                        <h2 className={styles["cart-title"]}><span>Resumen</span><span>del</span><span>pedido</span></h2>
                        <div className={styles["cart-total"]}>
                            <h3>Total</h3>
                            <strong className={styles["cart-price"]}>$800000</strong>
                        </div>
                        <small className={styles["cart-tax"]}>Incluye impuesto PAIS y percepción AFIP.</small>
                    </div>
                    <button className={styles["cart-btn"]} id="buy" type="button">COMPRAR</button>
                </div>
            </main>
            <Footer />
        </>
    )
}