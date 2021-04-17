import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  const [categories] = useState([
    {
      name: "About",
      component: <About/>,
    },
    { name: "Portfolio", component: <Portfolio/>},
    { name: "Resume", component: <Resume/>},
    {
      name: "Contact" ,
      component: <Contact/> ,
    },
  ]);
  

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
       
       {currentCategory.component}
       
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
