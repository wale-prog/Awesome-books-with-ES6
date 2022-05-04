import { DateTime } from './luxon.js';

const manageDate = () => {
  const datePara = document.createElement('p');
  const dateDisplay = document.querySelector('.date-display');
  const displayDate = document.querySelector('[data-time-display]');
  const getDate = () => {
    dateDisplay.appendChild(datePara);
    const now = DateTime.now();
    const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    datePara.innerHTML = date;
    displayDate.appendChild(datePara);
  };
  setInterval(getDate, 1000);
};
export default manageDate;
