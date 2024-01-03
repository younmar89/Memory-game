document.querySelector(".control-buttons span").onclick = function () {

let yourName = prompt("whats your name?");

if (yourName == null || yourName == "") {

document.querySelector(".name span").innerHTML = 'Unknown';


} else {

    document.querySelector(".name span").innerHTML = yourName;


}

document.querySelector(".control-buttons").remove();

};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);





// let orderRange =  [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());


shuffle(orderRange);


blocks.forEach((block, index) => {


block.style.order = orderRange[index];






// add Click Event
block.addEventListener('click', function (){

// trigger the flip block

  flipBlock(block);

});


});

// flip block funtion

function flipBlock(selectedBlock) {

// add class is flipped

selectedBlock.classList.add('is-flipped');
  
// COLLECTED ALL FLIPPED CARDS

let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

// IF THERES TWO SELECTED BLOCKS

if (allFlippedBlocks.length === 2){

// console.log('two flipped blocks selected');

// stop clicking function

stopClicking();

//  CHECK MATCHED BLOCK FUNCTION

checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks [1]);

}



}



// stop clicking function
function stopClicking() {

  // add class no clicking on main contaniner
  blocksContainer.classList.add('no-clicking');

  setTimeout(() =>{

    // remove class no clicking after the duration
    blocksContainer.classList.remove('no-clicking');

  }, duration);
}


// check matched block
function checkMatchedBlocks(firstBlock, secondBlock){

let triesElement = document.querySelector('.tries span');

if (firstBlock.dataset.photo ===  secondBlock.dataset.photo) {

  firstBlock.classList.remove('is-flipped');
  secondBlock.classList.remove('is-flipped');

  firstBlock.classList.add('has-match');
  secondBlock.classList.add('has-match');

} else {

  triesElement.innerHTML =  parseInt( triesElement.innerHTML) + 1;

  setTimeout(()  => {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

  }, duration);



}


}


// suffle function
function shuffle(array) {

let current = array.length,
temp,
random;

while (current > 0 ) {

  random = Math.floor(Math.random() * current);

  current--;

    temp = array[current];

    array[current] = array[random];

    array[random] = temp;
}

return array;

}


