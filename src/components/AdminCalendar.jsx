import { useEffect, useState } from "react";
import DatePicker, { DateObject, Calendar } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import "../assets/css/admin-asset.css";
import { useForm, Controller } from "react-hook-form";

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

  const handleDateChange = (date) => {
    let convertDate = date.map((subarray) => {
      return subarray.map((dateObject, index) => {
        return dateObject.format("YYYY-MM-DD");
      });
    });
    setValues(convertDate);
    onCalendarChange(convertDate);
  };

  return (
    <>
      <Calendar
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
        onChange={handleDateChange} // Agregamos el prop onChange
        multiple
        range
        numberOfMonths={2}
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
