import './App.css';
import Banner from './components/Banner';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import OurBlogs from './components/OurBlog';
import { Connect } from './components/Connect';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <InvestmentOpportunities />
      <OurBlogs />
      <Connect />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
