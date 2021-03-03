import React from 'react';
import Header from './Header';
import Hero from './Hero';
import CharacterList from './CharacterList';
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <main className='main'>
          <CharacterList />
        </main>
        <Footer />
      </>
    );
  }
}


export default App;