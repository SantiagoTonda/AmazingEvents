let dataCategories = fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((element) => {
    let categories = document.getElementById('categories')
    function showCategories() {
      let arrayCategories = []
      for (let Element of element.events) {
        if (!arrayCategories.includes(Element.category)) {
          arrayCategories.push(Element.category);
        }
      }

      let category = "";
      for (let element of arrayCategories) {
        category += `<label class="me-2 me-md-5" for="${element}"><input onclick="captureData()" class="checks" type="checkbox" value="${element}" id="${element}">${element}</label>`
      }
      categories.innerHTML = category;
    }
    showCategories();
  })