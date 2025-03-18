function getPronouns() {
  const selected = document.querySelector(
    "input[type='radio'][name='pronoun']:checked",
  );
  return selected.id;
}

function logFormSubmission(event) {
  const data = [];
  // const datObj = {};
  const dataIDs = ["nameInput", "emailInput", "dateInput"];

  for (let dataType in dataIDs) {
    const thingie = document.getElementById(dataIDs[dataType]);
    data.push(thingie.value);
  }

  const pronoun = getPronouns();
  data.push(pronoun);
  console.log("data:", data);
  const form = document.getElementById("form");
  const formData = new FormData(form);
  formData.set("pronoun", pronoun);
  // console.log(formData);
  // const formattedData = new FormData(
  //   data[0],
  //   data[1],
  //   data[2],
  //   data[3],
  //   data[4],
  //   data[5],
  // );
  console.table(formData);
}

// window.onload = function () {
//   // createWelcomeContainer();
//   // getData("https://swapi.dev/api/starships/").then(createSpaceships);
//   const form = document.getElementById("form");

// };

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", logFormSubmission); // TODO move this from in JS to HTMX?
  }
});
