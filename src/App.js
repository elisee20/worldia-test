import React ,{useState}from 'react';
import './App.css';
import Input from './search/components/input/Input';
import constants from './constants/constants';
import Calendar from './search/components/calendar/Calendar';
import Data from './assets/data/flightDatabase.json';
import {isFlightLaterTheSameDay} from "./utils/utilis";
import FlightList from './results/components/FlightList';
import sortBy from 'lodash/sortBy';

function App() {
 
  const today=new Date();
  const [selectedDepartDate, selectDepartDate] = useState(today);
  const [selectedReturnDate, selectReturnDate] = useState(today);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [flights, setFlights] = useState([]);



  const findFlightsInDataBase =()=> {
      const flights= Data.filter(({returnAirport,departureTime,departureAirport}) =>
         departureAirport.startsWith(from.toUpperCase()) && returnAirport.startsWith(to.toUpperCase()) 
         && isFlightLaterTheSameDay(selectedDepartDate,departureTime)
      );
    setFlights(sortBy(flights, ({ departureTime }) => departureTime));
 }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    findFlightsInDataBase();
  }
  return (
    <>
        <h1>{constants.TAGLINE}</h1>
        <section className="search-form">
        <form onSubmit={handleSubmit} >
        <div className="search-options">
      <Input title={constants.FROM} value={from} onChange={setFrom}/>
      <Input title={constants.TO}value={to} onChange={setTo}/>
      <Calendar title={constants.DEPARTURE_DATE} date={selectedDepartDate} onChange={selectDepartDate} />
      <Calendar title={constants.RETURN_DATE} date={selectedReturnDate} onChange={selectReturnDate} minDate={selectedDepartDate}/>
      </div>
      <div className="search-button">
      <button type="submit">{constants.SEARCH_FLIGHTS} </button>
    </div>
    </form>
    </section>
    <section className="flights-list">
    {!!flights.length && <FlightList flights={flights}/>}
    </section>

  </>
  );
}

export default App;
