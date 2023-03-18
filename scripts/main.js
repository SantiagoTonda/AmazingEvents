let data = fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((element) => {
    captureData(element);
  })
  function captureData(element) {
    let text = document.getElementById("search").value
    let checks = Array.from(document.querySelectorAll(".checks:checked")).map(elemento => elemento.defaultValue);
    let filteredArray = element.events.filter(evento => {
      return evento.name.toLowerCase().includes(text.toLowerCase()) && (checks.includes(evento.category) || checks.length == 0)
    })
    console.log(element);
    console.log(element.events);
    printCards(filteredArray, "allEvents");
  } 