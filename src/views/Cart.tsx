import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CartCard from "../components/CartCard"
import CartResume from "../components/CartResume"
import { useState } from "react"
import { useEffect } from "react"

interface Product{
    id:number;
    title: string;
    images: string[];
    description: string;
    price: number;
    units: number;
    colors: string[];
}

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
                    {productsOnCart.map((each) => (
                        <CartCard
                            key = {each.id}
                            id = {each.id}
                            title = {each.title} 
                            photo = {each.images[0]} 
                            description = {each.description} 
                            price = {each.price}
                            units = {each.units}
                            color = {each.colors[0]}
                        />
                    ))}
                </section>
                <CartResume total="800000"/>
            </main>
            <Footer />
        </>
    );
}