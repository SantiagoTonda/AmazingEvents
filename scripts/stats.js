let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let table3 = document.getElementById("table3")
let table1Content = "";
let table2Content = "";
let table3Content = "";

async function renderTable() {
    try {
        let response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
        let data = await response.json();
        let sortedByCapacity = data.events.sort((a, b) => b.capacity - a.capacity);
        let pastData = data.events.filter(element => element.date < data.currentDate);
        let pastCategories = pastData.map(element => element.category);
        let setPastCategories = new Set(pastCategories);
        let upcomingData = data.events.filter(element => element.date > data.currentDate);
        let upcomingCategories = upcomingData.map(element => element.category);
        let setUpcomingCategories = new Set(upcomingCategories);
        let percentageArray = []
        pastData.forEach(element => {
            let percentageItem = {
                name: element.name,
                percentage: (element.assistance / element.capacity) * 100
            }
            percentageArray.push(percentageItem);
        });
        let sortedPercentajeArray = percentageArray.sort((a, b) => b.percentage - a.percentage);
        table1Content += `
                    <tr>
                        <td>${sortedPercentajeArray[0].name} (%${sortedPercentajeArray[0].percentage})</td>
                        <td>${sortedPercentajeArray[sortedPercentajeArray.length -1].name} (%${sortedPercentajeArray[sortedPercentajeArray.length -1].percentage})</td>
                        <td>${sortedByCapacity[0].name}</td>
                    </tr>`

        table1.innerHTML = table1Content;

        setUpcomingCategories.forEach(category => {
            let categoryEvents = upcomingData.filter(element => category == element.category);
            let gains = categoryEvents.map(element => element.estimate * element.price);
            let revenue = gains.reduce((acc, gain) => acc + gain);
            let percentage = categoryEvents.map(element => (element.estimate / element.capacity) * 100);
            let percentageReduce = percentage.reduce((acc, percentage) => acc + percentage);
            let percentageOfAttendance = percentageReduce / categoryEvents.length;
            table2Content += `
                <tr>
                    <td>${category}</td>
                    <td>$${revenue}</td>
                    <td>${percentageOfAttendance.toFixed(2)}%</td>
                </tr>`
        })

        table2.innerHTML = table2Content;

        setPastCategories.forEach(category => {
            let categoryEvents = pastData.filter(element => category == element.category);
            let gains = categoryEvents.map(element => element.assistance * element.price);
            let revenue = gains.reduce((acc, gain) => acc + gain);
            let percentage = categoryEvents.map(element => (element.assistance / element.capacity) * 100);
            let percentageReduce = percentage.reduce((acc, percentage) => acc + percentage);
            let percentageOfAttendance = percentageReduce / categoryEvents.length;
            table3Content += `
                <tr>
                    <td>${category}</td>
                    <td>$${revenue}</td>
                    <td>${percentageOfAttendance.toFixed(2)}%</td>
                </tr>`
        })

        table3.innerHTML = table3Content;

    } catch (error) {
        console.log("error");
    }
}
renderTable();