import moment from "moment";
import fr from 'moment/locale/fr';

export const isFlightLaterTheSameDay =(firstDate,secondDate ) =>{
    moment.updateLocale('fr',fr);
    return  moment(firstDate).isSame(moment(secondDate),'day')&& moment(firstDate ,"DD-MM-YY").isBefore(moment(secondDate ,"DD-MM-YY"));
}

export const formatHours = (date)=> {
    moment.updateLocale('fr',fr);
   return moment(date).format('HH:mm');
}
    



export const getDurationfromdDate = (startDate,endDate) =>{
const start = moment(startDate)
const  end = moment(endDate)
const diff = end.diff(start);
return  moment.utc(diff).format('H[h ]mm[m]');
}