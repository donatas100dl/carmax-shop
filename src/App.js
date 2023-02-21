import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import CarDetails from "./components/CarDetails"
import NavBar1 from "./components/Navbar1"
function App() {
  const generateID = () => {
    return Math.round(Math.random() * (10000-1000))
  }
  // const cars = 
  // [
  //   {
  //     brand: "Chevrolet",
  //     version: "Traverse LT Leather",
  //     year: "2022",
  //     distance: "22",
  //     price: "42.998",
  //     whereAvailable: "Available at your store CarMax Kansas City, KS",
  //     img: "https://img2.carmax.com/assets/23736248/hero.jpg?width=400",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23736248/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23736248/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23736248/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23736248/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23736248/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23736248/25.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "266 torque@2800rpm",
  //     specHorsepower: "278 horsepower@6200rpm",
  //     specFuelCapacity: "19.4",
  //     specDismensions: `205.9" L x 78.6" W x 70.7" H`,
  //     specWheelbase: "120.93",
  //     specDriverLegRoom: "41.01",
  //     specDriverHeadRoom: "42.8",
  //     specCargoCapacity: "23.0"

  //   },
  //   {
  //     brand: "Honda",
  //     version: "Accord EX-L",
  //     year: "2013",
  //     distance: "117",
  //     price: "16.998",
  //     img: "https://img2.carmax.com/assets/23229075/hero.jpg?width=400",
  //     whereAvailable: "Available at your store CarMax Kansas City, KS",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23229075/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23229075/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23229075/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23229075/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23229075/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23229075/23.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "252 torque@4900rpm",
  //     specHorsepower: "278 horsepower@6200rpm",
  //     specFuelCapacity: "17.2",
  //     specDismensions: `191.4" L x 72.8" W x 57.7" H`,
  //     specWheelbase: "109.3",
  //     specDriverLegRoom: "42.5",
  //     specDriverHeadRoom: "37.6",
  //     specCargoCapacity: "15.5",
  //   },
  //   {
  //     brand: "Dodge",
  //     version: "Dart SXT",
  //     year: "2014",
  //     distance: "79",
  //     price: "14.998",
  //     img: "https://img2.carmax.com/assets/23228852/hero.jpg?width=400",
  //     whereAvailable: "Available at your store CarMax Kansas City, KS",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23228852/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "171 torque@4800rpm",
  //     specHorsepower: "184 horsepower@6250rpm",
  //     specFuelCapacity: "14.2 gal",
  //     specDismensions: `183.9" L x 72" W x 57.7" H`,
  //     specWheelbase: "106.4",
  //     specDriverLegRoom: "42.2",
  //     specDriverHeadRoom: "38.6",
  //     specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Ford",
  //     version: "Mustang",
  //     year: "2013",
  //     distance: "93",
  //     price: "16.998",
  //     img: "https://img2.carmax.com/assets/22877469/hero.jpg?width=400",
  //     whereAvailable: "Available at your store CarMax Kansas City, KS",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/22877469/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/22877469/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/22877469/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/22877469/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/22877469/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/22877469/21.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "280 torque@4250rpm",
  //     specHorsepower: "305 horsepower@6500rpm",
  //     specFuelCapacity: "16.0",
  //     specDismensions: `188.500" L x 73.900" W x 55.600" H`,
  //     specWheelbase: "107.100",
  //     specDriverLegRoom: "42.4",
  //     specDriverHeadRoom: "38.5",
  //     specCargoCapacity: "13.4",
  //   },
  //   {
  //     brand: "Ford",
  //     version: "Focus SEL",
  //     year: "2012",
  //     distance: "123",
  //     price: "11.998",
  //     img: "https://img2.carmax.com/assets/23818923/hero.jpg?width=400",
  //     whereAvailable: "Available at your store CarMax Kansas City, KS",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23818923/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23818923/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23818923/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23818923/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23818923/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23818923/21.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "146 torque@4450rpm",
  //     specHorsepower: "160 horsepower@6500rpm",
  //     specFuelCapacity: "12.4",
  //     specDismensions: `178.5" L x 71.8" W x 57.7" H`,
  //     specWheelbase: "104.3",
  //     specDriverLegRoom: "41.9",
  //     specDriverHeadRoom: "38.3",
  //     specCargoCapacity: "13.2",
  //   },
  //   {
  //     brand: "Tesla",
  //     version: "Model Y Long Range",
  //     year: "2021",
  //     distance: "17",
  //     price: "45.998",
  //     img: "https://img2.carmax.com/assets/23100662/hero.jpg?width=400",
  //     whereAvailable: "Only available at CarMax Independence, MO",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23100662/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23100662/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23100662/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23100662/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23100662/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23818923/21.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "N/A",
  //     specHorsepower: "N/A",
  //     specFuelCapacity: "Electric",
  //     specDismensions: `187" L x 75.6" W x 63.9" H`,
  //     specWheelbase: "113.8",
  //     specDriverLegRoom: "41.8",
  //     specDriverHeadRoom: "41",
  //     specCargoCapacity: "30.2",

  //   },
  //   {
  //     brand: "Jeep",
  //     version: "Wrangler Sport",
  //     year: "2013",
  //     distance: "52",
  //     price: "23.998",
  //     img: "https://img2.carmax.com/assets/23735901/hero.jpg?width=400",
  //     whereAvailable: "⁠Free Shipping from CarMax Independence, MO",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23735901/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "171 torque@4800rpm",
  //     specHorsepower: "184 horsepower@6250rpm",
  //     specFuelCapacity: "14.2 gal",
  //     specDismensions: `183.9" L x 72" W x 57.7" H`,
  //     specWheelbase: "106.4",
  //     specDriverLegRoom: "42.2",
  //     specDriverHeadRoom: "38.6",
  //     specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Chevrolet",
  //     version: "Cruze LT",
  //     year: "2012",
  //     distance: "115",
  //     price: "12.998",
  //     img: "https://img2.carmax.com/assets/23818496/hero.jpg?width=400",
  //     whereAvailable: "⁠Available at your store CarMax Kansas City, KS",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/23818496/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "171 torque@4800rpm",
  //     specHorsepower: "184 horsepower@6250rpm",
  //     specFuelCapacity: "14.2 gal",
  //     specDismensions: `183.9" L x 72" W x 57.7" H`,
  //     specWheelbase: "106.4",
  //     specDriverLegRoom: "42.2",
  //     specDriverHeadRoom: "38.6",
  //     specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Honda",
  //     version: "Odyssey EX-L",
  //     year: "2017",
  //     distance: "102",
  //     price: "23.998",
  //     img: "https://img2.carmax.com/assets/20597329/hero.jpg?width=400",
  //     whereAvailable: "⁠$199 Shipping from CarMax Midlothian, VA",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/20597329/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "171 torque@4800rpm",
  //     specHorsepower: "184 horsepower@6250rpm",
  //     specFuelCapacity: "14.2 gal",
  //     specDismensions: `183.9" L x 72" W x 57.7" H`,
  //     specWheelbase: "106.4",
  //     specDriverLegRoom: "42.2",
  //     specDriverHeadRoom: "38.6",
  //     specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Jeep",
  //     version: "Odyssey EX-L",
  //     year: "2020",
  //     distance: "9",
  //     price: "41.998",
  //     img: "https://img2.carmax.com/assets/20775980/hero.jpg?width=400",
  //     whereAvailable: "⁠$899 Shipping from CarMax Albany, NY",
  //     id: generateID(),

  //      //images for the car
  //      imgMain: "https://img2.carmax.com/assets/20775980/hero.jpg?width=800",
  //      imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //      imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //      imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //      imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //      imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",
 
  //      // car specs
  //      specTorque: "171 torque@4800rpm",
  //      specHorsepower: "184 horsepower@6250rpm",
  //      specFuelCapacity: "14.2 gal",
  //      specDismensions: `183.9" L x 72" W x 57.7" H`,
  //      specWheelbase: "106.4",
  //      specDriverLegRoom: "42.2",
  //      specDriverHeadRoom: "38.6",
  //      specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Ford",
  //     version: "Escape Titanium",
  //     year: "2016",
  //     distance: "71",
  //     price: "19.998",
  //     img: "https://img2.carmax.com/assets/21171229/hero.jpg?width=400",
  //     whereAvailable: "⁠$199 Shipping from CarMax Germantown, TN",
  //     id: generateID(),

  //      //images for the car
  //      imgMain: "https://img2.carmax.com/assets/21171229/hero.jpg?width=800",
  //      imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //      imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //      imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //      imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //      imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",
 
  //      // car specs
  //      specTorque: "171 torque@4800rpm",
  //      specHorsepower: "184 horsepower@6250rpm",
  //      specFuelCapacity: "14.2 gal",
  //      specDismensions: `183.9" L x 72" W x 57.7" H`,
  //      specWheelbase: "106.4",
  //      specDriverLegRoom: "42.2",
  //      specDriverHeadRoom: "38.6",
  //      specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Chevrolet",
  //     version: "Suburban 1500 LT",
  //     year: "2019",
  //     distance: "33",
  //     price: "53.998",
  //     img: "https://img2.carmax.com/assets/21212728/hero.jpg?width=400",
  //     whereAvailable: "⁠$199 Shipping from CarMax Golden, CO",
  //     id: generateID(),

  //      //images for the car
  //      imgMain: "https://img2.carmax.com/assets/21212728/hero.jpg?width=800",
  //      imgSide:"https://img2.carmax.com/img/vehicles/23228852/3.jpg?width=400&ratio=4/3",
  //      imgSideBack:"https://img2.carmax.com/img/vehicles/23228852/2.jpg?width=400&ratio=4/3",
  //      imgFront:"https://img2.carmax.com/img/vehicles/23228852/5.jpg?width=400&ratio=4/3",
  //      imgBack:"https://img2.carmax.com/img/vehicles/23228852/6.jpg?width=400&ratio=4/3",
  //      imgEngine:"https://img2.carmax.com/img/vehicles/23228852/20.jpg?width=400&ratio=4/3",
 
  //      // car specs
  //      specTorque: "171 torque@4800rpm",
  //      specHorsepower: "184 horsepower@6250rpm",
  //      specFuelCapacity: "14.2 gal",
  //      specDismensions: `183.9" L x 72" W x 57.7" H`,
  //      specWheelbase: "106.4",
  //      specDriverLegRoom: "42.2",
  //      specDriverHeadRoom: "38.6",
  //      specCargoCapacity: "13.1"
  //   },
  //   {
  //     brand: "Chrysler",
  //     version: "Pacifica Touring LT",
  //     year: "2020",
  //     distance: "58",
  //     price: "32.998",
  //     img: "https://img2.carmax.com/assets/21219878/hero.jpg?width=400",
  //     whereAvailable: "⁠⁠$899 Shipping from CarMax Tampa, FL",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/21219878/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23100662/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23100662/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23100662/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23100662/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23818923/21.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "N/A",
  //     specHorsepower: "N/A",
  //     specFuelCapacity: "Electric",
  //     specDismensions: `187" L x 75.6" W x 63.9" H`,
  //     specWheelbase: "113.8",
  //     specDriverLegRoom: "41.8",
  //     specDriverHeadRoom: "41",
  //     specCargoCapacity: "30.2",
  //   },
  //   {
  //     brand: "Jaguar",
  //     version: "XE Premium",
  //     year: "2018",
  //     distance: "39",
  //     price: "29.998",
  //     img: "https://img2.carmax.com/assets/21221753/hero.jpg?width=400",
  //     whereAvailable: "⁠$399 Shipping from CarMax San Antonio, TX",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/21221753/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23100662/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23100662/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23100662/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23100662/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23818923/21.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "N/A",
  //     specHorsepower: "N/A",
  //     specFuelCapacity: "Electric",
  //     specDismensions: `187" L x 75.6" W x 63.9" H`,
  //     specWheelbase: "113.8",
  //     specDriverLegRoom: "41.8",
  //     specDriverHeadRoom: "41",
  //     specCargoCapacity: "30.2",
  //   },
  //   {
  //     brand: "Mitsubishi",
  //     version: "Outlander SEL",
  //     year: "2019",
  //     distance: "54",
  //     price: "23.998",
  //     img: "https://img2.carmax.com/assets/21245447/hero.jpg?width=400",
  //     whereAvailable: "⁠$399 Shipping from CarMax San Antonio, TX",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/21245447/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/23100662/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/23100662/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/23100662/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/23100662/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/23818923/21.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "N/A",
  //     specHorsepower: "N/A",
  //     specFuelCapacity: "Electric",
  //     specDismensions: `187" L x 75.6" W x 63.9" H`,
  //     specWheelbase: "113.8",
  //     specDriverLegRoom: "41.8",
  //     specDriverHeadRoom: "41",
  //     specCargoCapacity: "30.2",
  //   },
  //   {
  //     brand: "BMW",
  //     version: "335 I",
  //     year: "2013",
  //     distance: "39",
  //     price: "28.998",
  //     img: "https://img2.carmax.com/assets/21257393/hero.jpg?width=400",
  //     whereAvailable: "⁠$399 Shipping from CarMax San Antonio, TX",
  //     id: generateID(),

  //     //images for the car
  //     imgMain: "https://img2.carmax.com/assets/21257393/hero.jpg?width=800",
  //     imgSide:"https://img2.carmax.com/img/vehicles/21257393/3.jpg?width=400&ratio=4/3",
  //     imgSideBack:"https://img2.carmax.com/img/vehicles/21257393/2.jpg?width=400&ratio=4/3",
  //     imgFront:"https://img2.carmax.com/img/vehicles/21257393/5.jpg?width=400&ratio=4/3",
  //     imgBack:"https://img2.carmax.com/img/vehicles/21257393/6.jpg?width=400&ratio=4/3",
  //     imgEngine:"https://img2.carmax.com/img/vehicles/21257393/23.jpg?width=400&ratio=4/3",

  //     // car specs
  //     specTorque: "300 torque@1200 - 5000rpm",
  //     specHorsepower: "300 horsepower@5800rpm",
  //     specFuelCapacity: "15.8",
  //     specDismensions: `182.500" L x 71.300" W x 56.300" H`,
  //     specWheelbase: "110.6",
  //     specDriverLegRoom: "42.0",
  //     specDriverHeadRoom: "40.3",
  //     specCargoCapacity: "17.0",
  //   }
  // ];
  const cars = JSON.parse(localStorage.getItem('cars'));
  return (
    <>
    <Routes>
      <Route path="/car/:id" element={  <CarDetails cars={cars}/> }/> 
      <Route path="/" element={  <Home cars={cars}/> }/> 
    </Routes>
    </>
  )
}

export default App
