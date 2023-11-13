import About from "./Components/About/About";
import AboutVideo from "./Components/AboutVideo/AboutVideo";
import Clients from "./Components/Clients/Clients";
import Comments from "./Components/Comments/Comments";
import Counts from "./Components/Counts/Counts";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Profiiles from "./Components/Profiiles/Profiiles";
import Support from "./Components/Support/Support";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Questions from "./Components/Questions/Questions";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Counts />
      <AboutVideo />
      <Clients />
      <Comments />
      <Services />
      <Support />
      <Profiiles />
      <Pricing />
      <Questions />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
