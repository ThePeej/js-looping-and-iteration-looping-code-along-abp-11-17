// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length ; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function flipTails () {
  return Math.random() >= 0.5;
}


function tailsNeverFails(){
  const countTails = 0
  debugger;
  while (flipTails()) {
    countTails += 1
    debugger;
    console.log(countTails)
  }
  return counTails
}
