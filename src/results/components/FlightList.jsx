import React from 'react';
import {formatHours,getDurationfromdDate} from "../../utils/utilis";
import constants from "../../constants/constants";

const FlightList =({flights})  =>{
return flights.map(({id,departureTime,arrivalTime,flightCode,companyName,price,returnAirport,departureAirport}) =>
    {
    return(
      <ul key={id} className="flight-item">
        <div className="flight-block-left" >
          <h3 className="flight-block-line">
        <li className="flight-time">{`${formatHours(departureTime)} - ${formatHours(arrivalTime)}`}</li>
        <li className="flight-time">{getDurationfromdDate(departureTime,arrivalTime)}</li>
        </h3>
        <div className="flight-block-line">
        <li className="flight-company">{departureAirport}</li>
        <li className="flight-company">{returnAirport}</li>
        </div>
        <div className="flight-block-line">
        <li className="flight-company">{companyName}</li>
        <li className="flight-company">{flightCode}</li>
        </div>
        </div>
        <div className="flight-block-right" >

      <h3>{price}</h3>
      <button className="flight-item-cta">{constants.SELECT_FLIGHT}</button>
  
  </div>
      </ul>)
})
}
export default FlightList;