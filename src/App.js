import {useEffect, useState} from "react";
import Headers from "./components/Headers.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contact from "./components/Contact.jsx";
import Details from "./components/Details.jsx";
import {getRestaurants} from "./redux/restaurantSlice";
import {useDispatch} from "react-redux";
import Adding from "./components/Adding.jsx";

function App() {

  const [restaurants,setRestaurant]=useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch("/restaurants.json")
    .then((data) => data.json())
    .then((res) => dispatch(getRestaurants(res.restaurants)));

}, []);

  

  // const restaurants = {
  //   id: 1,
  //   name: "Mission Chinese Food",
  //   neighborhood: "Manhattan",
  //   photograph: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  //   address: "171 E Broadway, New York, NY 10002",
  //   location:"249, Palakkad Main Rd, Ukkadam, Coimbatore, Tamil Nadu 641008" 
  //   }
  return (
    <div>
      <BrowserRouter>
      <Headers/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
        <Route  path="/details/:id" element={<Details/>}/>
        <Route  path="/adding" element={<Adding/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
