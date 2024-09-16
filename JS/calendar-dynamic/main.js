let today = new Date();
let currentMonth = dateFns.startOfToday();
let debutMois = dateFns.startOfMonth(today);
let finMois = dateFns.endOfMonth(today);
let debutSemaine = dateFns.startOfWeek(debutMois, { weekStartsOn: 1 }); // La semaine commence le lundi
let finSemaine = dateFns.endOfWeek(finMois, { weekStartsOn: 1 });

window.onload = function () {
  updateCalendar();
  renderMonth();
};
function updateCalendar() {
  // Maj des limites du mois et de la semaine
  monthElement.innerText = dateFns.format(currentMonth, "MMMM yyyy", {
    locale: dateFns.locale.fr,
  });
  debutMois = dateFns.startOfMonth(currentMonth);
  finMois = dateFns.endOfMonth(currentMonth);
  debutSemaine = dateFns.startOfWeek(debutMois, { weekStartsOn: 1 });
  finSemaine = dateFns.endOfWeek(finMois, { weekStartsOn: 1 });
  renderCalendar();
}

//mon;
const monthNames = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

// selection dans le html
const monthElement = document.getElementById("month");
const daysElement = document.getElementById("days");
const monthSelectElement = document.getElementById("month-select");
// bouton de navigation pour passer au mois dernier avec subMonths
document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth = dateFns.subMonths(currentMonth, 1);
  updateCalendar();
});
// bouton de navigation pour passer au mois suivant avec addMonths
document.getElementById("next-month").addEventListener("click", () => {
  currentMonth = dateFns.addMonths(currentMonth, 1);
  updateCalendar();
});

monthSelectElement.addEventListener("change", selectMonth);

function renderCalendar() {
  daysElement.innerHTML = "";
  let moisTotal = dateFns.eachDayOfInterval({
    start: debutSemaine,
    end: finSemaine,
  });

  for (let jour of moisTotal) {
    let jourUI = document.createElement("div");
    jourUI.classList.add("jour", "calendar-cell");
    if (!dateFns.isSameMonth(jour, currentMonth)) {
      jourUI.classList.add("prev-month", "jour");
    } else {
      jourUI.classList.add("jour");
    }
    jourUI.innerText = jour.getDate();
    daysElement.appendChild(jourUI);
  }
}

function renderMonth() {
  for (let i = 0; i < monthNames.length; i++) {
    let monthOption = document.createElement("option");

    let month = convertFormat(currentMonth, "moisFR");
    let difference = i - monthNames.indexOf(month);

    if (difference > 0) {
      monthOption.value = dateFns.addMonths(currentMonth, difference);
    } else {
      monthOption.value = dateFns.subMonths(currentMonth, -difference);
    }

    monthOption.innerText = monthNames[i];

    if (month == monthNames[i]) monthOption.selected = true;
    monthSelectElement.appendChild(monthOption);
  }
}

function selectMonth(event) {
  currentMonth = event.target.value;
  updateCalendar();
}

function convertFormat(date, option) {
  let month;
  if (option == "moisFR") {
    month = dateFns.format(date, "MMMM", { locale: dateFns.locale.fr });
  }
  return month;
}
