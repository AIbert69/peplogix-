import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Categories from './components/Categories'
import About from './components/About'
import ProductGrid from './components/ProductGrid'
import PurityBanner from './components/PurityBanner'
import FAQ from './components/FAQ'
import Shipping from './components/Shipping'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Categories />
        <About />
        <ProductGrid />
        <PurityBanner />
        <FAQ />
        <Shipping />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
