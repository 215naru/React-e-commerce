import styles from "./OnSale.module.css"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import products from "../assets/products"
import OnSaleCard from "../components/OnSaleCard"
export default function OnSale(){
    const onSale = products.filter((each)=>each.onsale);
    return(
        <>
            <NavBar/>
            <Hero first="Black" second="Friday"/>
            <main>
                <div className={styles["product-container"]} id="products">
                    {onSale.map((each)=>(
                        <OnSaleCard
                            key = {each.id}
                            id = {each.id}
                            title = {each.title}
                            price = {each.price}
                            color = {each.colors[0]}
                            image = {each.images[0]}
                        />
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    );
}