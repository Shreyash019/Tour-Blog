import React, {useState, useEffect} from 'react';
import './style/tour.css';
import TourShow from './TourShow';
import {getTours} from '../../utils/actions/tourActions';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from 'react-js-pagination';
import TourFront from './TourFront';


const TourHome = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch();
  const {loading, errors, tours, tourCount, resultPerPage} = useSelector((state)=> state.tours)

  useEffect(()=>{   
    dispatch(getTours(currentPage))
  },[dispatch, errors, currentPage])

  const setCurrentPageNo = (e)=>{
    setCurrentPage(e)
  }

  return (
    <>
    {loading ? 'Loading...': 
      <div className='tour-container'>
        <TourFront/>
        <h2>Available Tours</h2>
        <div className='tour-card-container'>
          {tours && tours.map((tour, index) => (
            <>
              <TourShow
                key={tour._id}
                id={tour._id}
                data={tour}
              />
            </>          
          ))}<br/>
        </div>
        <div className='pagination'>
          <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={tourCount}
          onChange={setCurrentPageNo}
          prevPageText='Prev'
          nextPageText='Next'
          firstPageText='First' 
          lastPageText='Last'
          itemClass='page-item'
          linkClass='page-link'
          activeClass='pageItemActive'
          activeLinkClass='pageLinkActive'
          />
        </div>
      </div>
    }<br/><br/><br/><br/><br/><br/>
    </>
  )
}

export default TourHome