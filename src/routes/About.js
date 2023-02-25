import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function About(){
    return(
        <>
            <Navbar/>
            <Hero cName="hero-mid" heroImg="https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            title="About Us"
            btnClass="hide"/>
        </>
    )
}

export default About;