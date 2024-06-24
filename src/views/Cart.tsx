import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CartCard from "../components/CartCard"
import CartResume from "../components/CartResume"
import Product from "../interfaces/Product"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import productsActions  from "../store/actions/products"

export default function Cart() {
    const {calculateTotal} = productsActions;
    const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const products = localStorage.getItem("cart");
        if (products) {
            setProductsOnCart(JSON.parse(products));
            dispatch(calculateTotal({products: JSON.parse(products)}));
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
                <CartResume/>
            </main>
            <Footer />
        </>
    );
}