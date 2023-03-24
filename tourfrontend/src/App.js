import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';

// User
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import UserProfile from './components/user/profile/UserProfile';
import UserProfileUpdate from './components/user/profile/UserProfileUpdate';
import ForgotPassword from './components/user/auth/ForgotPassword';
import UpdatePassword from './components/user/auth/UpdatePassword';
import ResetPassword from './components/user/auth/ResetPassword';

// Blogs
import AllBlogs from './components/blog/AllBlogs';
import CreateBlog from './components/blog/CreateBlog';
import SingleBlog from './components/blog/SingleBlog';
import UserBlogs from './components/blog/UserBlogs';
import UpdateDeleteBlog from './components/blog/UpdateDeleteBlog';

// Tours
import Tour from './components/tour/Tour';
import CreateTour from './components/tour/guide/CreateTour';
import SingleTour from './components/tour/SingleTour';
import TourUpdateDelete from './components/tour/guide/TourUpdateDelete';
import CreateReview from './components/tour/user/CreateReview';
import TourReviews from './components/tour/user/TourReview';
import ReviewUpdateDelete from './components/tour/user/ReviewUpdateDelete';

// Orders
import AllOrders from './components/booking/AllOrders';
import CreateOrder from './components/booking/CreateOrder';
import OrderDetails from './components/booking/OrderDetails';
import AllOrderGuide from './components/booking/AllOrderGuide';
import GuideUpdateDeleteOrder from './components/booking/GuideUpdateDeleteOrder';

import store from './store/store'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './utils/actions/UserAction';
import {useNavigate} from 'react-router-dom';


function App() {
  const history = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(state=> state.user);
  useEffect(()=>{
    if(isAuthenticated){
      store.dispatch(loadUser())
    } else{

    }
  }, [])
  return (
    <>
      <Header/>
      <Routes>
        {/* Home, Contact, and About pages */}
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>


        {/* User module Pages */}
        <Route exact path='/login' element={<SignIn/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>

      {isAuthenticated ?
      <>
        <Route exact path='/password/forgot' element={<ForgotPassword/>}/>
        <Route exact path='/password/reset' element={<ResetPassword/>}/>
        <Route exact path='/password/update/:id' element={<UpdatePassword/>}/>
        <Route exact path='/profile' element={<UserProfile/>}/>
        <Route exact path='/profile/update/:id' element={<UserProfileUpdate/>}/>
      </>  : <></>
      }

        {/* Blog module Pages */}
        <Route exact path='/blogs' element={<AllBlogs/>}/>
        <Route exact path='/blog/create' element={<CreateBlog/>}/>
        <Route exact path='/blog' element={<SingleBlog/>}/>
        <Route exact path='/blogs/user' element={<UserBlogs/>}/>
        <Route exact path='/blog/update' element={<UpdateDeleteBlog/>}/>

        {/* Tour module pages */}
        <Route exact path='/tours' element={<Tour/>}/>
        <Route exact path='/tour/create' element={<CreateTour/>}/>
        <Route exact path='/tour/:id' element={<SingleTour/>}/>
        <Route exact path='/tour/update' element={<TourUpdateDelete/>}/>
        <Route exact path='/tour/review' element={<TourReviews/>}/>
        <Route exact path='/tour/review/create' element={<CreateReview/>}/>
        <Route exact path='/tour/review/update' element={<ReviewUpdateDelete/>}/>

        {/* Order module pages */}
        <Route exact path='/tour/orders' element={<AllOrders/>}/>
        <Route exact path='/tour/book/:id' element={<CreateOrder/>}/>
        <Route exact path='/tour/order/detail' element={<OrderDetails/>}/>
        <Route exact path='/tour/order/guide' element={<AllOrderGuide/>}/>
        <Route exact path='/tour/orders/guide/update' element={<GuideUpdateDeleteOrder/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
