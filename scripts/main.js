let allEvents = [];
let cardEvents = document.getElementById('allEvents');

function showCards() {
  for (let element of data.events) {
    let card = `
      <div>
        <img src= "${element.image}" alt="${element.name}."></img>
          <p class="h3 mt-2">${element.name}</p>
          <p class="h5">${element.description}</p>
          <div class="d-flex justify-content-around align-items-center mt-3">
            <p class="m-0">${element.price}</p>
            <a href="./details.html" class="btn btn-outline-secondary btn-shadow">Details</a>
          </div>
      </div> `

    allEvents.push(card);
  }
  cardEvents.innerHTML = allEvents;
}
showCards();










/* let = pastEvents = [];
let = upcomingEvents = [];

for(let element of data.events) {
  if(element.date < data.currentDate) {
    pastEvents.push(element)
  } else {
    upcomingEvents.push(element)
  }
}

console.log(upcomingEvents);
console.log(pastEvents); */