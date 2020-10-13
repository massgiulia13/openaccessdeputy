import Chart from "chart.js";

import "./styles.css";
import deputies from "../assets/deputati.json";

const simplifiedDeputies = [];

const extractEducation = (info) => {
  if (info.includes("Licenza elementare")) {
    return "Primary school";
  } else if (info.includes("Licenza media")) {
    return "Secondary school";
  } else if (info.includes("Diploma")) {
    return "High school";
  } if (info.includes("Laurea")) {
    return "Bachelor or Master degree";
  } else if (info.includes("Istituto professionale")){
    return "High school";
  } else {
    return "Other"; 
  }

};

deputies.results.bindings.forEach((deputy) => {
  const simplifiedDeputy = {
    name: (deputy.nome) ? deputy.nome.value : "Unknown",
    surname: (deputy.cognome) ? deputy.cognome.value : "Unknown",
    education: (deputy.info) ? extractEducation(deputy.info.value) : "Unknown", 
  };
  //push the obj in the other list above
}); 


document.getElementById("number-of-deputies").innerHTML = `
Total Number Of Deputies ${adjustedDeputies.length}`;

// print the deputies list

adjustedDeputies.forEach((d) => {
  document.getElementById("list-deputies").innerHTML = `
    ${document.getElementById("list-deputies").innerHTML}
    <li>
      <b>Deputy:</b> ${d.name} ${d.surname}
      <b>Education:</b> ${d.education}
    </li>
  `;
});

// group the data by their education
const primarySchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Primary School"
);
const secondarySchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Secondary School"
);
const highSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "High School"
);
const degreeSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Bachelor or Master Degree"
);
const otherSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Other"
);
const unknownSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Unknown"
);

// print the chart

var ctx = document.getElementById("chart").getContext("2d");

const options = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Chart.js Doughnut Chart"
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
};

const data = {
  datasets: [
    {
      data: [
        primarySchoolCount.length,
        secondarySchoolCount.length,
        highSchoolCount.length,
        degreeSchoolCount.length,
        otherSchoolCount.length,
        unknownSchoolCount.length
      ],
      backgroundColor: ["red", "orange", "blue", "green", "violet", "black"]
    }
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    "Primary School",
    "Secondary School",
    "High School",
    "Bachelor or Master Deggree",
    "Other",
    "Unknown"
  ]
};

new Chart(ctx, {
  type: "doughnut",
  data,
  options
});


/* const adjustedDeputies = [];

const extractEducation = (info) => {
  // console.log(info);
  if (info.includes("Licenza media")) {
    return "Secondary School";
  } else if (info.includes("Laurea")) {
    return "Bachelor or Master Degree";
  } else if (info.includes("Diploma")) {
    return "High School";
  } else if (info.includes("Diploma")) {
    return "Primary School";
  } else {
    return "Other";
  }
};

deputies.results.bindings.forEach((deputy) => {
  const { nome, cognome, info } = deputy;
  adjustedDeputies.push({
    name: nome ? nome.value : "Unknown",
    surname: cognome ? cognome.value : "Unknown",
    education: info ? extractEducation(info.value) : "Unknown"
  });
});

// print the number of deputies (this is useful to check if our script worked properly)
document.getElementById("number-of-deputies").innerHTML = `
Total Number Of Deputies ${adjustedDeputies.length}`;

// print the deputies list

adjustedDeputies.forEach((d) => {
  document.getElementById("list-deputies").innerHTML = `
    ${document.getElementById("list-deputies").innerHTML}
    <li>
      <b>Deputy:</b> ${d.name} ${d.surname}
      <b>Education:</b> ${d.education}
    </li>
  `;
});

// group the data by their education
const primarySchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Primary School"
);
const secondarySchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Secondary School"
);
const highSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "High School"
);
const degreeSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Bachelor or Master Degree"
);
const otherSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Other"
);
const unknownSchoolCount = adjustedDeputies.filter(
  (d) => d.education === "Unknown"
);

// print the chart

var ctx = document.getElementById("chart").getContext("2d");

const options = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Chart.js Doughnut Chart"
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
};

const data = {
  datasets: [
    {
      data: [
        primarySchoolCount.length,
        secondarySchoolCount.length,
        highSchoolCount.length,
        degreeSchoolCount.length,
        otherSchoolCount.length,
        unknownSchoolCount.length
      ],
      backgroundColor: ["red", "orange", "blue", "green", "violet", "black"]
    }
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    "Primary School",
    "Secondary School",
    "High School",
    "Bachelor or Master Deggree",
    "Other",
    "Unknown"
  ]
};

new Chart(ctx, {
  type: "doughnut",
  data,
  options
}); */
