import styles from "./Details.module.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import products from "../../public/products"
import { useParams } from "react-router-dom"
import Hero from "../components/Hero"
import Thumbs from "../components/Thumbs"
import Description from "../components/Description"
import Checkout from "../components/Checkout"
import ProductCard from "../components/ProductCard"

export default function Details() {
  const {id} = useParams();
  const product = products.find((each)=> each.id === id);
  const onsale = products.filter((each) => each.onsale);
  return (
    <>
      <NavBar/>
      {!product && <Hero first="NOT" second="found"/>}
      <main>
        <div className={styles["details-container"]}>
          {product && (
            <div id="details" className={styles["columns-container"]}>
              <Thumbs product={product}/>
              <Description product={product}/>
              <Checkout product={product}/>
            </div>
          )}

          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <div id="product-container" className={styles["product-container"]}>
              {onsale.map((each) =>(
                <ProductCard
                  key = {each.id}
                  id = {each.id}
                  title = {each.title}
                  price = {each.price}
                  color = {each.colors[0]}
                  image = {each.images[0]} 
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
