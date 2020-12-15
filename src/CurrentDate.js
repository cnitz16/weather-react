import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  // let hours = props.date.getHours();
  // if (hours > 12) {
  //   hours = `(${hours} - 12)`;
  // }
  // let minutes = props.date.getMinutes();
  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // }
  let time = props.date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div>
      {day} {time}
    </div>
  );
}
