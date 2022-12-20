import React, { useState } from 'react';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';

const pages = [
  {name: "about"},
  {name: "portfolio"},
  {name: "contact"},
  {name: "resume"}
]

function App() {
  const [page, setPage] = useState(pages[0].name);
  
  const currentPage = () => {
    switch(page.name) {
      case pages[0].name:
        return <About />
      case pages[1].name:
        return <Portfolio />
      case pages[2].name:
        return <Contact />
      case pages[3].name:
        return <Resume />
      default:
        return <About />

    }
  }

  return (
    <div>
      <Header>
        <Nav page={page} pages={pages} setPage={setPage}/>
      </Header>
      <main>
        {currentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
