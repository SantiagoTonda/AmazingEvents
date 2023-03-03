let = pastEvents = [];
let = upcomingEvents = [];

for(let each of data.events) {
  if(each.date < data.currentDate) {
    pastEvents.push(each)
  } else {
    upcomingEvents.push(each)
  }
}

console.log(upcomingEvents);
console.log(pastEvents);