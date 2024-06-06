import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
export default function NotFound(){
    return(
        <>
            <NavBar/>
            <Hero first="404" second="not found"/>
            <Footer/>
        </>
    );
}