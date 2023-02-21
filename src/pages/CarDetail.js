import Navbar1 from "../components/Navbar1";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../main.css";

function CarDetail({ car }) {
  const isMobile = useMediaQuery("(max-width:1111px)");
  return (
    <body style={{ overflowX: "hidden" }} className="flex flex-col gap-3 gap-md-5">
      <header className="mb-5 flex flex-col m-auto max-w-full">
        <div className="mx-md-auto">
          <Navbar1 className="mb-3"></Navbar1>

          <div className=" max-w-fit">
            <Link
              to={`/carmax-shop`}
              className="d-flex flex-row mx-3 a-link p-2 rounded-md"
            >
              <span className="pt-1">
                <svg
                  class="back-arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.41421 10.8476L8.84758 6.41421L7.43336 5L1.29289 11.1405C0.902369 11.531 0.902369 12.1642 1.29289 12.5547L7.43336 18.6952L8.84758 17.2809L4.41421 12.8476H21.0351V10.8476H4.41421Z"
                  ></path>
                </svg>
              </span>
              <span className="mx-md-2 text-xl a-link font-semibold">
                Search
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* cars prev*/}

      <section
        style={{
          width: "100vw",
          height: isMobile ? "auto" : "92vh",
          position: "relative",
        }}
        className="max-h-fit"
      >
        <container className="">
          <div className="d-flex flex-col mx-md-5 mx-2">
            <div className="d-flex flex-md-row flex-col gap-2">
              <span
                className="mx-1 font-bold nav-link mx-2"
                style={{ fontSize: "5vh" }}
              >
                {car.year} {car.brand}
              </span>
              <span className="font-bold nav-link" style={{ fontSize: "5vh" }}>
                {car.version}
              </span>
            </div>
            <span className="mx-1" style={{ fontSize: "3vh" }}>
              ${car.price} | {car.distance}K km
            </span>
          </div>
        </container>
        <section className="min-w-max min-h-max max-h-[100vh] relative block my-5">
          {isMobile ? (
            //render mobile grid
<div className="d-flex flex-row m-auto overflow-x-scroll" style={{ width: '100%', minHeight:'300px', maxWidth:"100vw" }}>
  <img src={car.imgFront} className="mr-2" style={{ width: '80vw' }} />
  <img src={car.imgBack} className="mr-2" style={{ width: '80vw' }} />
  <img src={car.imgSideBack} className="mr-2" style={{ width: '80vw' }} />
  <img src={car.imgMain} className="mr-2" style={{ width: '80vw' }} />
  <img src={car.imgSide} className="mr-2" style={{ width: '80vw' }} />
  <img src={car.imgEngine} className="mr-2" style={{ width: '80vw' }} />
</div>
          ) : (
            //render carousel
            <div
              style={{
                maxWidth: "50vw",
                maxHeight: "50vh",
                margin: "auto",
              }}
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-100"
                    src={car.imgMain}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100 h-100"
                    src={car.imgSide}
                    alt="Second slide"
                  />
                </Carousel.Item >
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-100"
                    src={car.imgSideBack}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-100"
                    src={car.imgFront}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-100"
                    src={car.imgBack}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-100"
                    src={car.imgEngine}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          )}
        </section>
      </section>

      {/* cars spec*/}

      <section className="w-[100vw] min-h-max relative mt-[0px] md:mt-[70px]">
        <header className="mb-5 d-flex flex-col m-auto max-w-full">
          <h1
            className="nav-link font-bold mx-md-5 mx-2 p-2"
            style={{ fontSize: "3.5vh" }}
          >
            Features & Specs
          </h1>
          {/*borderBottom: "1.3px solid #C7C2C1"*/}
        </header>
        <main style={{ backgroundColor: "#f5f6f7" }} className="p-5 relative">
          <container className="">
            <ul
              className="d-flex flex-col gap-3 m-md-auto m-0"
              id="car-spec"
              style={{
                fontSize: "2vh",
              }}
            >
              <span className="font-bold my-3">Performance</span>
              <li
                className="d-flex flex-row justify-between py-2"
                style={{ borderBottom: "1.3px solid #C7C2C1" }}
              >
                <span>Torque (ft-lbs)</span>
                <span className="font-semibold">{car.specTorque}</span>
              </li>
              <li
                className="d-flex flex-row justify-between py-2"
                style={{ borderBottom: "1.3px solid #C7C2C1" }}
              >
                <span>Horsepower</span>
                <span className="font-semibold">{`${car.specHorsepower}`}</span>
              </li>
              <li className="d-flex flex-row justify-between py-2">
                <span>Fuel Capacity</span>
                <span className="font-semibold">{`${car.specFuelCapacity} gal`}</span>
              </li>
              <span className="font-bold my-3">Measurements</span>
              <li
                className="d-flex flex-row justify-between py-2"
                style={{ borderBottom: "1.3px solid #C7C2C1" }}
              >
                <span>Dimensions</span>
                <span className="font-semibold">{car.specDismensions}</span>
              </li>
              <li
                className="d-flex flex-row justify-between py-2"
                style={{ borderBottom: "1.3px solid #C7C2C1" }}
              >
                <span>Wheelbase</span>
                <span className="font-semibold">{`${car.specWheelbase}"`}</span>
              </li>
              <li
                className="d-flex flex-row justify-between py-2"
                style={{ borderBottom: "1.3px solid #C7C2C1" }}
              >
                <span>Driver Leg Room</span>
                <span className="font-semibold">{`${car.specDriverLegRoom}"`}</span>
              </li>
              <li
                className="d-flex flex-row justify-between py-2"
                style={{ borderBottom: "1.3px solid #C7C2C1" }}
              >
                <span>Driver Head Room</span>
                <span className="font-semibold">{`${car.specDriverHeadRoom}"`}</span>
              </li>
              <li className="d-flex flex-row justify-between py-2">
                <span>Cargo Capacity</span>
                <span className="font-semibold">{`${car.specCargoCapacity} cu ft`}</span>
              </li>
            </ul>
          </container>
        </main>
      </section>
    </body>
  );
}

export default CarDetail;
