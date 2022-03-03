var one=document.querySelector('#one');
var two=document.querySelector('#two');
var three=document.querySelector('#three');
var four=document.querySelector('#four');
var five=document.querySelector('#five');
var six=document.querySelector('#six');
var seven=document.querySelector('#seven');
var eight=document.querySelector('#eight');
var nine=document.querySelector('#nine');

var p1=document.querySelector('#btn1')
var p2=document.querySelector('#btn2')
var cp='btn1'

var head=document.getElementById('head')
var restart=document.getElementById('restart')
var guduri =document.getElementById('guduri')
console.log(head);
//heading color change function
function getRandomcolor() {
  var letters='0123456789ABCDEF'
  var color='#'
  for (var i = 0; i < 6; i++) {
    color+= letters[Math.floor(Math.random()*16)]
  }
  return color
}
function changeColor() {
  color=getRandomcolor()
  head.style.color=color
  //p1.style.color=color
//  p2.style.color=color
  guduri.style.color=color
  restart.style.color=color
}
setInterval("changeColor()",500)


p1.addEventListener('mouseover',function () {
  p1.style.background='#c78158';
})
p2.addEventListener('mouseover',function () {
  p2.style.background='#95c758';
})

p1.addEventListener('mouseout',function () {
  p1.style.background='#95c758';
})
p2.addEventListener('mouseout',function () {
  p2.style.background='#c78158';
})

function currentPlayer(ele_id) {

  if (ele_id==='btn1') {
    cp='btn1'
    console.log(cp);
  }
  else if (ele_id==='btn2') {
    cp='btn2'
    console.log(cp);
  }
}

if (cp==='btn1') {
  console.log('T');
  //one.textContent='X'
}
else {
  console.log(cp);
  console.log("F");
  //one.textContent='O'
}

//CEEL ONE
one.addEventListener('click',function (){

  if (one.textContent==='') {
    if (cp==='btn1') {
      console.log(cp);
      one.textContent='X'
      if ((two.textContent==='X' && three.textContent==='X')||
      (four.textContent==='X' && seven.textContent==='X')||
      (five.textContent==='X' && nine.textContent==='X')) {
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      console.log(cp);
      one.textContent='O'
      if ((two.textContent==='O' && three.textContent==='O')||
      (four.textContent==='O' && seven.textContent==='O')||
      (five.textContent==='O' && nine.textContent==='O')) {
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//CELL two
two.addEventListener('click',function () {

  if (two.textContent==='') {
    if (cp==='btn1') {
      two.textContent='X'
      if ((one.textContent==='X' && three.textContent==='X')||
      (five.textContent==='X' && eight.textContent==='X')) {
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      two.textContent='O'
      if ((one.textContent==='O' && three.textContent==='O')||
      (five.textContent==='O' && eight.textContent==='O')){
        alert("Second PLayer Won the Game....!")
    }
  }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//CELL THREE
three.addEventListener('click',function () {

  if (three.textContent==='') {
    if (cp==='btn1') {
      three.textContent='X'
      if ((two.textContent==='X' && one.textContent==='X')||
      (five.textContent==='X' && seven.textContent==='X')||
      (six.textContent==='X' && nine.textContent==='X')) {
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      three.textContent='O'
      if ((two.textContent==='O' && one.textContent==='O')||
      (five.textContent==='O' && seven.textContent==='O')||
      (six.textContent==='O' && nine.textContent==='O')) {
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//CELL FOUR
four.addEventListener('click',function () {

  if (four.textContent==='') {
    if (cp==='btn1') {
      four.textContent='X'
      if ((five.textContent==='X' && six.textContent==='X')||
      (one.textContent==='X' && seven.textContent==='X')){
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      four.textContent='O'
      if ((one.textContent==='O' && seven.textContent==='O')||
      (five.textContent==='O' && six.textContent==='O')){
        alert("Second PLayer Won the Game....!")
    }
  }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//cell five coding placed at last
//cell six
six.addEventListener('click',function () {

  if (six.textContent==='') {
    if (cp==='btn1') {
      six.textContent='X'
      if ((five.textContent==='X' && four.textContent==='X')||
      (three.textContent==='X' && nine.textContent==='X')) {
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      six.textContent='O'
      if ((three.textContent==='O' && nine.textContent==='O')||
      (five.textContent==='O' && four.textContent==='O')) {
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//cell seven
seven.addEventListener('click',function () {

  if (seven.textContent==='') {
    if (cp==='btn1') {
      seven.textContent='X'
      if ((five.textContent==='X' && three.textContent==='X')||
      (four.textContent==='X' && one.textContent==='X')||
      (eight.textContent==='X' && nine.textContent==='X')) {
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      seven.textContent='O'
      if ((five.textContent==='O' && three.textContent==='O')||
      (four.textContent==='O' && one.textContent==='O')||
      (eight.textContent==='O' && nine.textContent==='O')) {
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//cell eight
eight.addEventListener('click',function () {

  if (eight.textContent==='') {
    if (cp==='btn1') {
      eight.textContent='X'
      if ((seven.textContent==='X' && nine.textContent==='X')||
      (five.textContent==='X' && two.textContent==='X')){
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      eight.textContent='O'
      if ((nine.textContent==='O' && seven.textContent==='O')||
      (five.textContent==='O' && two.textContent==='O')){
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//cell nine
nine.addEventListener('click',function () {

  if (nine.textContent==='') {
    if (cp==='btn1') {
      nine.textContent='X'
      if ((five.textContent==='X' && one.textContent==='X')||
      (eight.textContent==='X' && seven.textContent==='X')||
      (six.textContent==='X' && three.textContent==='X')) {
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      nine.textContent='O'
      if ((five.textContent==='O' && one.textContent==='O')||
      (eight.textContent==='O' && seven.textContent==='O')||
      (six.textContent==='O' && three.textContent==='O')) {
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//cell five
five.addEventListener('click',function () {

  if (five.textContent==='') {
    if (cp==='btn1') {
      five.textContent='X'
      if ((nine.textContent==='X' && one.textContent==='X')||
      (three.textContent==='X' && seven.textContent==='X')||
      (two.textContent==='X' && eight.textContent==='X')||
       (four.textContent==='X' && six.textContent==='X')){
        alert("First PLayer Won the Game....!")
      }
    }
    else {
      five.textContent='O'
      if ((nine.textContent==='O' && one.textContent==='O')||
      (three.textContent==='O' && seven.textContent==='O')||
      (two.textContent==='O' && eight.textContent==='O')||
       (four.textContent==='O' && six.textContent==='O')){
        alert("Second PLayer Won the Game....!")
    }
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})


console.log(one);
var squares=document.querySelectorAll("td")

//function that cleares all the content of all the squares.
function clearSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent=''
  }

}
