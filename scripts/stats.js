let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let table3 = document.getElementById("table3")
let tableContent = "";

async function renderTable() {
    try {
        let response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
        let data = await response.json();
        let sortedByCapacity = data.events.sort((a, b) => b.capacity - a.capacity);
        let pastData = data.events.filter(element => element.date < data.currentDate);
        let percentageArray = []
        pastData.forEach(element => {
            let percentageItem = {
                name: element.name,
                percentage: (element.assistance / element.capacity) * 100
            }
            percentageArray.push(percentageItem);
        });
        let sortedPercentajeArray = percentageArray.sort((a, b) => b.percentage - a.percentage);
        console.log(sortedPercentajeArray);
        tableContent += `
            <p class="h1 text-center">Events statistics</p>
            <table>
                <thead>
                    <tr>
                        <th>Event with the highest percentage of attendance</th>
                        <th>Event with the lowest percentage of attendance</th>
                        <th>Event with larger capacity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${sortedPercentajeArray[0].name} (%${sortedPercentajeArray[0].percentage})</td>
                        <td>${sortedPercentajeArray[sortedPercentajeArray.length -1].name} (%${sortedPercentajeArray[sortedPercentajeArray.length -1].percentage})</td>
                        <td>${sortedByCapacity[0].name}</td>
                    </tr>
                </tbody>
            </table>
            <p class="h1 text-center">Upcoming events statistics by category</p>
            <table>
                <thead>
                    <tr>
                        <th>Categories</th>
                        <th>Revenues</th>
                        <th>Percentage of attendance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            `

        table1.innerHTML = tableContent;
    } catch (error) {
        console.log("error");
    }
}
renderTable();