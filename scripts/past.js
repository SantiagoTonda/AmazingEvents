function showCards() {
  let card = ""
  for (let element of data.events) {
    if (element.date < data.currentDate) {
    card += `<div class="d-flex flex-column align-items-center justify-content-between">
               <img src= "${element.image}" alt="${element.name}."></img>
               <p class="h3 mt-2">${element.name}</p>
               <p>${element.description}</p>
               <div class="d-flex align-items-center mb-3">
               <p class="my-0 me-5">Price: $${element.price}</p>
               <a href="./details.html" class="btn btn-outline-secondary btn-shadow ms-5">Details</a>
               </div>
             </div>`
    }
  }
  document.getElementById('pastEvents').innerHTML = card
}
showCards();