import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Process />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
