/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../redux/covidData/covid';

function Home() {
  const covidReducer = useSelector((state) => state.covidReducer.covid);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!covidReducer.length) {
      dispatch(fetchData());
    }
  }, []);
  const Europe = covidReducer.filter((item) => item.continent === 'Europe');
  return (
    <div className='body'>
      
        {
        Europe.map((data) => {
          const {
            country,
            flag,
          } = data;

          return (
            <div className="main-cont" key={country}>
              {country}
              <img src={flag} alt={country} />

            </div>

          );
        })
      }
    </div>
  );
}

export default Home;
