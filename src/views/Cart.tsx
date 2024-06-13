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
                <CartCard title="iPad Pro 12.9" description="The iPad Pro 12.9 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs." colors="Silver" units="2"/>
                <CartResume/>
            </main>
            <Footer />
        </>
    )
}