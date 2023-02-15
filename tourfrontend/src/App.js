import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Main from './components/main/Main';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import UserProfile from './components/user/profile/UserProfile';
import HomePage from './components/HomePage';
import BlogHome from './components/main/blog/BlogHome';
import SingleBlog from './components/main/blog/SingleBlog';
import BlogPost from './components/main/blog/BlogPost';
import BlogUpdate from './components/main/blog/BlogUpdate';
import BlogDelete from './components/main/blog/BlogDelete';
import TourHome from './components/main/tour/TourHome';
import SingleTour from './components/main/tour/SingleTour';
import TourBook from './components/main/tour/TourBook';
import TourUpdate from './components/main/tour/TourUpdate';
import TourDelete from './components/main/tour/DeleteTour';
import UserProfileUpdate from './components/user/profile/UserProfileUpdate';
import ForgotPassword from './components/user/auth/ForgotPassword';
import UpdatePassword from './components/user/auth/UpdatePassword';
import ResetPassword from './components/user/auth/ResetPassword';
import Contact from './components/contact/Contact'

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>

        <Route exact path='/login' element={<SignIn/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/password/forgot' element={<ForgotPassword/>}/>
        <Route exact path='/password/reset' element={<ResetPassword/>}/>
        <Route exact path='/password/update/:id' element={<UpdatePassword/>}/>
        <Route exact path='/profile' element={<UserProfile/>}/>
        <Route exact path='/profile/update/:id' element={<UserProfileUpdate/>}/>

        <Route exact path='/homepage' element={<HomePage/>}/>

        <Route exact path='/blogs' element={<BlogHome/>}/>
        <Route exact path='/blog' element={<SingleBlog/>}/>
        <Route exact path='/blog/create' element={<BlogPost/>}/>
        <Route exact path='/blog/update' element={<BlogUpdate/>}/>
        <Route exact path='/blog/delete' element={<BlogDelete/>}/>

        <Route exact path='/tours' element={<TourHome/>}/>
        <Route exact path='/tour/:id' element={<SingleTour/>}/>
        <Route exact path='/tour/book' element={<TourBook/>}/>
        <Route exact path='/tour/update' element={<TourUpdate/>}/>
        <Route exact path='/tour/delete' element={<TourDelete/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
