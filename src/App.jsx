import './App.css'
import ActivitiesSection from './components/ActivitiesSection'
import ContactFormSection from './components/ContactFormSection'
import DestinationSection from './components/DestinationSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PackagesSection from './components/PackagesSection'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div>
     
        <Navbar />
        <HeroSection />
        <DestinationSection />
        <PackagesSection />
        <ActivitiesSection />
        <ContactFormSection />
        <Footer />
      </div>
    </>
  )
}

export default App
