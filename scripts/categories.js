let categories = document.getElementById('categories')
async function showCategories() {
  try {
    let response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    let data = await response.json();
    let arrayCategories = []
    for (let element of data.events) {
      if (!arrayCategories.includes(element.category)) {
        arrayCategories.push(element.category);
      }
    }

    let category = "";
    for (let element of arrayCategories) {
      category += `<label class="me-2 me-md-5" for="${element}"><input onclick="captureData()" class="checks" type="checkbox" value="${element}" id="${element}">${element}</label>`
    }
    categories.innerHTML = category;
  } catch (error) {
    console.log(error);
  }
}
showCategories();