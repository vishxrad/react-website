import Navbar from './Navbar'
import BannerSlider from './BannerSlider'
import HeroSection from './HeroSection'
import './App.css'

function App() {
  return (
    <div className="w-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <BannerSlider />
      <HeroSection />
    </div>
  );
}




export default App
