let cross = document.querySelectorAll('.main__line');

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; 
}

let lastRandNumber = [];
cross.forEach(function (item) {
  item.addEventListener('click', function(e) {
    if (e.target.classList.contains('running-man')) {
      item.removeChild(e.target)
    }
  })    
})

let hp = 100;
let end = false;
function addMan () {
  let runingMan = document.createElement('img');
  let number = getRandomArbitrary(0, 4)

  if (lastRandNumber.length > 3) {
    lastRandNumber = [lastRandNumber[3]];
  }

  while(lastRandNumber.indexOf(number) != -1) {
    number = getRandomArbitrary(0, 4);
  }

  lastRandNumber.push(number);

  console.log(lastRandNumber);
  console.log(number);

  let randomCross = cross[number];

  runingMan.addEventListener("animationend", function () {
    let hpBlock = document.querySelector('.main__hp');
    hp = hpBlock.textContent - 10;
    if (hp <= 0) {
      let runMans = document.querySelectorAll('.running-man');
      runMans.forEach(function (item) {
        item.remove()
      })
      end = true;
      alert('you Lose')
    }
    console.log(hp)
    hpBlock.textContent = hp ;

    randomCross.removeChild(runingMan)
  });

  runingMan.src = '878911081.gif';
  runingMan.classList.add('running-man');
  randomCross.append(runingMan);
  console.log('popop')
}

var startTime = new Date();

setInterval(function popop() {
  var curTime = new Date();
  var delta = curTime.getTime() - startTime.getTime();
  console.log(delta)
  if (delta > 2000) { 
    if (end == true) {
      let runMans = document.querySelectorAll('.running-man');
      runMans.forEach(function (item) {
        item.remove()
      })
      clearInterval;
    } else {
      addMan ();
    }
    startTime = new Date();
  }
}, 200);