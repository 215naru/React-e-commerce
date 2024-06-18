import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CartCard from "../components/CartCard"
import CartResume from "../components/CartResume"
import Product from "../interfaces/Product"
import { useState } from "react"
import { useEffect } from "react"

export default function Cart() {
    const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            const products = JSON.parse(cart);
            setProductsOnCart(products);
        }
    }, []);
    return (
        <>
            <NavBar />
            <Hero first="mi" second="carrito" />
            <main>
                <section className="flex-flex-col">
                    {productsOnCart.map((each: Product) => (
                        <CartCard
                            key = {each.id}
                            product ={each}
                        />
                    ))}
                </section>
                <CartResume total={90}/>
            </main>
            <Footer />
        </>
    );
}