// gets the item to play
function getRandomItem() {
	//Get the index
  const array = ['Stone', 'Paper', 'Scissors'];
  var index = Math.floor((Math.random() * 3));;
  //console.log('array[' + index + ']: ' + array[index]);
  return array[index];

};

//Evaluate the winner based on name of item
//const evaluatePpt = (myChoice, theirChoice) => {
function evaluatePpt(myChoice, theirChoice){
  let result = -2;
  if(myChoice == theirChoice) {
    result = 0;
  } else
	if(myChoice == 'Stone') {
    if(theirChoice == 'Paper') {
      result = -1;
    } else {
      result = 1; //Sccisors
    }
  } else if(myChoice == 'Paper'){
    if(theirChoice == 'Scissors') {
      result = -1;
    } else {
      result = 1;
    }
  } else if(myChoice == 'Scissors') {
    if(theirChoice == 'Stone') {
      result = -1;
    } else {
      result = 1;
    }
  } else {
    console.log("Error, Unknown choice")
  }

  return result;
};

//Conver numeric result to Message
function getWinnerMsg(result) {
  if(result == 0) {
    return 'Draw game!';
  } else if (result == -1) {
    return 'You win!';
  } else if(result == 1) {
    return 'You loose!';
  } else {
    return 'WTF!';
  }
}


module.exports={
   getRandomItem,
   evaluatePpt,
   getWinnerMsg
}
