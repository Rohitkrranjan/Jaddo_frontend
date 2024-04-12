import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NewsLetter from './Components/NewLetter/NewLetter';
import TopDestination from './Components/TopDestination/TopDestinatiion'
import Footer from './Components/Footer/Footer';
import Offer from './Components/Offers/Offer'
import BookTrip from './Components/BookTrip/BookTrip';
import People from './Components/People/People';
import CompanyLogo from './Components/CompanyLogo/CompanyLogo';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Hero/>
     <Offer/>
     <TopDestination/>
     <BookTrip/>
     <People/>
     <CompanyLogo/>
     <NewsLetter/>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
