function printCards(filteredArray, id) {
    let cards = "";
    for (let element of filteredArray) {
        cards += `<div class="d-flex flex-column align-items-center justify-content-between">
              <img src= "${element.image}" alt="${element.name}."></img>
              <p class="h3 mt-2">${element.name}</p>
              <p>${element.description}</p>
              <div class="d-flex align-items-center mb-3">
              <p class="my-0 me-5">Price: $${element.price}</p>
              <a href="./details.html?id=${element._id}&from=${id}" class="btn btn-outline-secondary btn-shadow ms-5">Details</a>
              </div>
            </div>`
    }
    document.getElementById(id).innerHTML = cards;
}