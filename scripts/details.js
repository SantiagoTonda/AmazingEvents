/* Falta agregar card de error cuando no exista lo que se busca
   Falta modificar estilos del details y el stats */


let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
console.log(urlParams);
let id = urlParams.get('id') - 1;
let from = urlParams.get('from');
if (from == "allEvents") {
    from = "index";
}
let evento = data.events[id];

function printDetail() {
    document.getElementById('details').innerHTML = 
    `<div class="details d-flex flex-column align-items-center flex-md-row">
        <div class="detail-div-img">
            <img class="detail-img" src="${evento.image}" alt="${evento.name}.">
        </div>
        <div class="detail-text d-flex flex-column align-items-center justify-content-between">
            <p class="h1">${evento.name}</p>
            <p class="h4">${evento.date}</p>
            <p class="h4">${evento.description}</p>
            <p class="h4">Category: ${evento.category}</p>
            <p class="h4">Place: ${evento.place}</p>
            <p class="h4">Capacity: ${evento.capacity}</p>
            <p class="h4">Assistance: ${evento.assistance}</p>
            <p class="h4">Price: $${evento.price}</p>
        </div>
    </div>
    <a href="./${from}.html" class="btn btn-outline-dark mt-4">Go back</a>`
}
printDetail();