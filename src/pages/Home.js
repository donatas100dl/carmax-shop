import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar1 from "../components/Navbar1";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import "../main.css";
import CarCard from "../components/CarCard";
function Home(props) {
  const cars = props.cars
  console.log(cars)
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
            <header className="mb-5 d-flex flex-col m-auto max-w-full">
          <Navbar1></Navbar1>
          <SearchBar
            searchQuery={searchQuery}
            handleSearchQuery={handleSearchQuery}
          ></SearchBar>
        </header>
        <main className="d-flex flex-row min-w-full">
          <container className="min-w-fit d-none d-lg-flex min-h-fit">
            <Filters className=""></Filters>
          </container>
          <container
            className="d-flex justify-center flex-col"
            style={{ minWidth: "80%" }}
          >
            <div className=" mx-16">
              <span>Used cars for Sale | {cars.length}</span>
            </div>
                <container className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 me-0 min-w-fit m-0 ms-md-5">
                  {cars && cars.map((car) => (
                     <CarCard car={car} cars={cars} searchQuery={searchQuery} />
                  ))}
                </container>
          </container>
        </main>
    </>
  )
}

export default Home
