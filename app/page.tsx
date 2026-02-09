import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyNative from '@/components/WhyNative'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyNative />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
