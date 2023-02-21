import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../main.css";
function CarCard({ car, searchQuery, cars }) {
  if (
    searchQuery &&
    !car.brand.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !car.version.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !car.year.toLowerCase().includes(searchQuery.toLowerCase())
  ) {
    return null;
  }
  return (
    <Link to={`car/${car.id}`} >
    <Card className="">
      <Card.Img variant="top" src={car.img} />
      <Card.Body className="">
        <Card.Text className="d-flex flex-col">
          <span className="" style={{ color: "#1871c9" }}>
            {car.year} {car.brand}
          </span>
          <span className="" style={{ color: "#1871c9" }}>
            {car.version}
          </span>
          <span className="text-xl" style={{ color: "#565d65" }}>
            ${car.price} * {car.distance}K km
          </span>
          <span className=" border-t-2 mt-2 text-xs">{car.whereAvailable}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
  );
}

export default CarCard;
