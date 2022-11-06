"use strict";

//selecting elements
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minut = document.getElementById("minuts");
const second = document.getElementById("seconds");

const counter = () => {
  const dateStart = new Date("Nov 20, 2022 00:00:00").getTime();
  const dateEnd = new Date().getTime();

  const difference = dateStart - dateEnd;

  const seconds = 1000;
  const minuts = 60 * seconds;
  const hours = 60 * minuts;
  const days = hours * 24;

  const timeDays = Math.floor(difference / days);
  const timeHours = Math.floor((difference % days) / hours);
  const timeMinuts = Math.floor((difference % hours) / minuts);
  const timeSeconds = Math.floor((difference % minuts) / seconds);


  day.textContent = timeDays;
  hour.textContent = timeHours;
  minut.textContent = timeMinuts;
  second.textContent = timeSeconds;
};

setInterval(counter, 1000);
