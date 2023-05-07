import BackgroundImage from "./assets/components/background/BackgroundImage.jsx";
import Header from "./assets/components/header/Header.jsx";
import Section from "./assets/components/main/Section.jsx";
import Decorations from "./assets/components/decorations/Decorations.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

function App() {
  return (
    <>
      <BackgroundImage>
        <Header/>
        <Section/>
      </BackgroundImage>
      <Decorations/>
      <Footer/>
    </>
  )
}

export default App