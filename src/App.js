import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Home/Footer';
import Aboutus from './Components/Aboutus/AboutUs';
import Blog from './Components/Blog/Blog';
import Faq from './Components/Faq/Faq';
import Contactus from './Components/Contactus/Contactus';



function App() {
  return (
    <>
    <Navbar/>
  
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/aboutus' element={<Aboutus />}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/faq' element={<Faq />}/>
    <Route path='/contactus' element={<Contactus />}/>
     </Routes>
     
     <Footer />
   
     </>
  
  );
}

export default App;
