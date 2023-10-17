let dogsSeen = document.getElementById("dogsSeen")
let woofCount = document.getElementById("woof-count")
let counter = 0
let countedDogs 

function woof(){
  counter += 1
  woofCount.innerText = counter
}

function save(){
  countedDogs = ` ${counter} -`
  dogsSeen.innerText += countedDogs 
  console.log(countedDogs)
}

function reset(){
  counter = 0
  countedDogs = ""
  woofCount.innerText = counter
  dogsSeen.innerText = countedDogs
}