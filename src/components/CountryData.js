import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/covidData/covid';

function CountryData() {
  const covideReducer = useSelector((state) => state.covideReducer.covid);
  console.log(covideReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!covideReducer) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div />
  );
}

export default CountryData;
