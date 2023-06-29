// Code your solution in this file!
  function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    const hq = 42; // Scuber headquarters
     return Math.abs(pickupLocation - hq); // return absolute value to handle negative distances

  }

  function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation); // call distanceFromHqInBlocks to get the number of blocks
  return blocks * 264; // return the number of feet by multiplying the number of blocks by the length of each block
}


function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(start - destination); // calculate the number of blocks traveled
  return blocks * 264; // return the number of feet by multiplying the number of blocks by the length of each block
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination); // get the distance traveled in feet
  let fare;
  if (distance <= 400) {
    fare = 0; // first 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25; // flat fare for distance between 2000 and 2500 feet
  } else {
    fare = 'cannot travel that far'; // distance over 2500 feet is not allowed
  }
  return fare;
}