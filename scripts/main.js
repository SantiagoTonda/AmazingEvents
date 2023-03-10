function showCards() {
  let card = ""
  for (let element of data.events) {
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
  document.getElementById('allEvents').innerHTML = card;
}
showCards();

function showCategories() {
  let arrayCategories = []
  for (let element of data.events) {
    if (!arrayCategories.includes(element.category)) {
      arrayCategories.push(element.category)
    }
  }

  let category = "";
  for (let element of arrayCategories) {
    category += `<label class="me-2 me-md-5" for="${element}"><input type="checkbox" id="${element}">${element}</label>`
  }
  document.getElementById('categories').innerHTML = category;
}
showCategories();