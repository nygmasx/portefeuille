import {Navbar} from "./components/Navbar.tsx";
import {Main} from "./components/Main.tsx";
import {About} from "@/components/About.tsx";
import {Projects} from "@/components/Projects.tsx";
import {Contact} from "@/components/Contact.tsx";
import {Footer} from "@/components/Footer.tsx";
function App() {

  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main className="">
            <Main/>
            <About/>
            <Projects/>
            <Contact/>
        </main>
        <footer>
            <Footer/>
        </footer>

    </>
  )
}

export default App
