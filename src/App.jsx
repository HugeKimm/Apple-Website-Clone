import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from  './components/Model';
import Features from './components/Features';
import Works from './components/Works';
import Images from './components/Images';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';


const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Works />
      <Images />
      <Footer />
      


      
    </main>
  )
}

export default Sentry.withProfiler(App);
