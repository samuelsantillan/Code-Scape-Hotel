import { useEffect, useState } from "react";
import DatePicker, { DateObject, Calendar } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import { useForm, Controller } from "react-hook-form";
import "./AdminCalendarStyle.css"; 
import { useWindowSize } from 'react-use';

const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
const AdminCalendar = ({ onCalendarChange }) => {
  const [values, setValues] = useState([new DateObject()]);
  const windowSize = useWindowSize(); 

  const handleDateChange = (date) => {
    let convertDate = date.map((subarray) => {
      return subarray.map((dateObject, index) => {
        return dateObject.format("YYYY-MM-DD");
      });
    });
    setValues(convertDate);
    onCalendarChange(convertDate);
  };

  const numberOfMonths = windowSize.width < 768 ? 1 : 2;
  return (
    <>
      <Calendar
        className="adminCalendar"
        months={months}
        weekDays={weekDays}
        mapDays={({ date }) => {
          let isWeekend = [0, 6].includes(date.weekDay.index);

          if (isWeekend)
            return {
              disabled: true,
              style: { color: "#ccc" },
              onClick: () => alert("weekends are disabled"),
            };
        }}
        value={values}
        onChange={handleDateChange}
        multiple
        range
        numberOfMonths={numberOfMonths} // Utiliza numberOfMonths
        multipleRangeSeparator="&"
        plugins={[
          <Footer
            position="bottom"
            format="MMM DD"
            names={{
              selectedDates: "Hotel information:",
              from: "Departure date:",
              to: "Return date:",
              selectDate: "select",
              close: "Close",
              separator: ",",
            }}
          />,
        ]}
      />
    </>
  );
};

export default AdminCalendar;

