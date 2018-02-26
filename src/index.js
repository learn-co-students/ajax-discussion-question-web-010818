// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const button = document.getElementsByTagName('button')[0]
button.addEventListener("click", fetchData)
let data;

function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => buildUser(json) )
}

function buildUser(json) {
  userData = json["results"][0]
  // name
  let fullname = userData["name"]["title"] + " " + userData["name"]["first"] + " " + userData["name"]["last"]
  buildElement('fullname', fullname, toTitleCase)
  // email
  buildElement('email', userData["email"])
  // street
  buildElement('street', userData["location"]["street"], toTitleCase)
  // city
  buildElement('city', userData["location"]["city"], toTitleCase)
  // state
  buildElement('state', userData["location"]["state"], toTitleCase)
  // postcode
  buildElement('postcode', userData["location"]["postcode"])
  // phone
  buildElement('phone', userData["phone"])
  // cell
  buildElement('cell', userData["cell"])
  // date of birth
  buildElement('date_of_birth', userData["dob"], formatDate)
}

function buildElement(id, str, format) {
  const tag = document.getElementById(id);
  tag.innerHTML = "";
  let field;
  if (format) {
    field = format(str)
  } else {
    field = str;
  }
  const fieldText = document.createTextNode(field);
  tag.appendChild(fieldText);
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function formatDate(date) {
  let newDate = new Date(date);

  let year = newDate.getFullYear();
  let month = newDate.getMonth()+1;
  let day = newDate.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return month + '-' + day + '-' + year
}

// {gender: "female", name: {…}, location: {…}, email: "karen.evans@example.com", login: {…}, …}cell: "081-404-4629"dob: "1986-07-16 13:51:31"email: "karen.evans@example.com"gender: "female"id: {name: "PPS", value: "2879435T"}location: {street: "6412 grafton street", city: "clane", state: "tipperary", postcode: 75430}login: {username: "redbutterfly517", password: "eclipse1", salt: "ijGqz9Pc", md5: "c34612123704558eb7185fbe81df0a57", sha1: "8a3372a63501f8295951cceb22ff48d380796270", …}name: {title: "miss", first: "karen", last: "evans"}nat: "IE"phone: "051-104-7603"picture: {large: "https://randomuser.me/api/portraits/women/47.jpg", medium: "https://randomuser.me/api/portraits/med/women/47.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"}registered: "2003-09-30 06:25:23"__proto__: Object
