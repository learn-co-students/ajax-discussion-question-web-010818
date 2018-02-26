document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('button').addEventListener('click', function(e) {fetchData()})

  const fullname = document.getElementById("fullname");
  const email = document.getElementById('email');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const postcode = document.getElementById('postcode');
  const phone = document.getElementById('phone');
  const cell = document.getElementById('cell');
  const dob = document.getElementById('date_of_birth')



  function fetchData(){
          let data = fetch('https://randomuser.me/api/')
            .then( res => res.json() )
            .then( json => assignData(json) )

  }

  function assignData(data) {
    const results = data.results[0]
    console.log(results)
    fullname.innerText += `${results.name.first} ${results.name.last}`
    email.innerText += results.email
    street.innerText = results.location.street
    city.innerText = results.location.city
    state.innerText = results.location.state
    postcode.innerText = results.location.postcode
    phone.innerText = results.phone
    cell.innerText = results.cell
    dob.innerText = results.dob
  }

});
