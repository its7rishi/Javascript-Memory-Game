const blocks = document.querySelectorAll('.block');
const messageBox = document.querySelector('.message');

function randomize() {
  for (let i = 0; i <= blocks.length - 1; i++) {
    for (let j = blocks.length - 1; j >= 0; j--) {
      let k = blocks[i].innerHTML;
      blocks[i].innerHTML = blocks[j].innerHTML;
      blocks[j].innerHTML = k;
    }
  }
}

randomize();

let clickList = [];
let score = 0;

blocks.forEach((block) => {
  block.addEventListener('click', () => {
    block.style.backgroundColor = 'tomato';
    block.style.color = '#fff';
    block.style.pointerEvents = 'none';
    clickList.push(block);
    console.log(clickList);
    console.log(block.textContent);

    if (clickList.length === 2) {
      if (clickList[0].textContent === clickList[1].textContent) {
        score++;
        console.log(`Score: ${score}`);
        clickList.forEach((elem) => {
          elem.style.backgroundColor = 'green';
          elem.style.pointerEvents = 'none';
        });
        if (score === 6) messageBox.style.display = 'flex';
        clickList = [];
      } else {
        // score = 0;
        clickList.forEach((elem) => {
          elem.style.pointerEvents = 'auto';
          elem.style.backgroundColor = 'darkslategray';
          elem.style.color = 'transparent';
        });
        clickList = [];
        // location.reload();
        // randomize();
      }
    } else if (clickList.length > 2) {
      clickList.pop(clickList[0]);
      clickList.pop(clickList[1]);
    }
  });
});

// RESET GAME

const resetGame = () => {
  // location.reload();
  history.go(0);
  randomize();
};
