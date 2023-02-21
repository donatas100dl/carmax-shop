import {  useLocation  } from 'react-router-dom';
import CarDetail from "../pages/CarDetail";

function CarDetails(props) {
  const cars = props.cars
  const { pathname } = useLocation();
  const id  = pathname.split('/')[2];
  const car = cars.find( (car) => car.id.toString() === id)
  console.log(car)
  console.log(useLocation());
  console.log(props.cars)
  return ( <>
  <CarDetail car={car} cars={cars}/>
  </>

  );
}

export default CarDetails;