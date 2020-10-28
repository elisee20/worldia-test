import React from 'react';
import constants from '../../../constants/constants';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const selectedDayStyle = `.DayPicker-Day--highlighted {
   background-color: #33979a;
   color: white;
 }
 DayPicker-Day--selected {
   background-color: yellow;
   color: white;
 }
 .DayPicker-Day--today {
  font-weight: red;
  font-weight: 700;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
  position: relative;
  background-color: #33979A;
  color: #F0F8FF;
}
 .DayPicker-Day--disabled {
   color: #00bcd4;
 }`;

const Calendar =({title,onChange,date,minDate}) =>{
  const today=new Date();
  const valueOrDefaultAfterDepatureDate=(minDate && date < minDate)?minDate:date;
  return (
       <section className="calendar">
          <label className="input-container">
      {title}
    </label>
      <DayPickerInput 
      format={constants.FORMAT_DATE} 
      onDayChange={onChange} 
      value={valueOrDefaultAfterDepatureDate} 
      dayPickerProps={{
        disabledDays: {
            before: today
        },
    }}
      selectedDays={date} 
      month={today} 
      style={{selectedDayStyle}}
      />
      <style>{selectedDayStyle}</style>

    </section>
  );
}

export default Calendar;