import './App.css';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <div>
        <Navigation />
        <main className='global-content'>
          <Contact />
          <ContactForm />
        </main>
      </div>
    </>
  );
}

export default App;
