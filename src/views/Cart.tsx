import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CartCard from "../components/CartCard"
import CartResume from "../components/CartResume"

export default function Cart() {
    return (
        <>
            <NavBar />
            <Hero first = "mi" second = "carrito" />
            <main>
                <CartCard/>
                <CartResume/>
            </main>
            <Footer />
        </>
    )
}