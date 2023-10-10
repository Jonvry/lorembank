import Navbar from './components/Navbar'
import SubSection from "./components/SubSection";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Services from "./components/Services";


export default function Home() {
  return (
        <div>
            <div className='max-w-screen-xl m-auto px-6 sm:px-8'>
                <Navbar/>
                <Hero/>
                <Featured/>
                <Services/>
            </div>
               <SubSection/>
               <Footer/>
        </div>
  )  
}
