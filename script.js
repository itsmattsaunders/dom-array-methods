const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionaires = document.getElementById('show-millionaires')
const sort = document.getElementById('sort')
const calculateBtn = document.getElementById('calculate-wealth')

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money
async function getRandomUser(){
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  console.log(newUser)
}