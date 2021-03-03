import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <main className='main'>
        </main>
        <Footer />
      </>
    );
  }
}


export default App;