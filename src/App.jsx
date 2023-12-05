import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Partners from './components/Partners.jsx';
import LatestBlog from './components/LatestBlog.jsx';
import { Footer } from './components/Footer.jsx';
import Faqs from './components/Faqs.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <LatestBlog />
      <Faqs/>
      <Footer />
    </>
  )
}

export default App