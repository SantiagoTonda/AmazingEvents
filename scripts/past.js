function captureData() {
  let text = document.getElementById("search").value
  let checks = Array.from(document.querySelectorAll(".checks:checked")).map(element => element.defaultValue);
  let filteredArray = data.events.filter(evento => {
    return evento.name.toLowerCase().includes(text.toLowerCase()) && (checks.includes(evento.category) || checks.length == 0) && evento.date < data.currentDate;
  })
  printCards(filteredArray, "past_events");
}

captureData();