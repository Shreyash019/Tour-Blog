import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Main from './components/main/Main';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import HomePage from './components/HomePage';
import { useSelector } from 'react-redux';
import BlogHome from './components/main/blog/BlogHome';

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login' element={<SignIn/>}/>
        <Route exact path='/singup' element={<SignUp/>}/>
        <Route exact path='/blogs' element={<BlogHome/>}/>
        <Route exact path='/homepage' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
