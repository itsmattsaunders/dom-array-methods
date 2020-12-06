const main = document.getElementById('main')
const addUserBtn = document.getElementById('add_user')
const doubleBtn = document.getElementById('double')
const showMillionaires = document.getElementById('show_millionaires')
const sort = document.getElementById('sort')
const calculateBtn = document.getElementById('calculate_wealth')

let data = [];

//fetch random user and add money
async function getRandomUser(){
  console.log('click')
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }
  addData(newUser)
}



//Add new obj to data arr
function addData(obj){
  data.push(obj)
  updateDOM();


// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
    });
  }
}

//Format number as money
function formatMoney(number){
 return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//ecent listeners
addUserBtn.addEventListener('click', getRandomUser);
