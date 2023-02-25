import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home(){
    return(
        <>
            <Navbar/>
            <Hero cName="hero" heroImg="https://images.pexels.com/photos/388413/pexels-photo-388413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            title="Protect your plants, protect your harvest" text="Empowering farmers with smart technology, Outsmart pests with intelligent vision!"
            buttonText="Get Started"
            url="/"
            btnClass="show"/>
        </>
    )
}

export default Home;