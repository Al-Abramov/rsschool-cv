let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
let copy = new Date(date)

copy.setDate(copy.getDate()-days);
  return copy.getDate();
}

console.log(getDateAgo(date, 1))