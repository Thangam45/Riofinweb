import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Home/Footer';
import Aboutus from './Components/Aboutus/About';
import Blog from './Components/Blog/Blog';
import Faq from './Components/Faq/Faq';
import Contact from './Components/Contactus/Contact'
// import Login from './Components/Login and Register/'


function App() {
  return (
    <>
    <Navbar/>
  
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/aboutus' element={<Aboutus />}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/faq' element={<Faq />}/>
    <Route path='/contactus' element={<Contact />}/>
     </Routes>
     
     <Footer />
   
     </>
  
  );
}

export default App;
