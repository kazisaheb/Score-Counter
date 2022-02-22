let Overs = document.getElementById('Overs')
let Runs = document.getElementById('Runs')
let iniRuns = Runs.innerText

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')

let run = document.getElementById('run')
let enter = document.getElementById('enter')
let overSum = document.getElementById('overSum')

let enterBtn = document.getElementById('enter')
let newOverBtn = document.getElementById('newOver')

enter = () => {
  if (run.value < 0 || run.value == '' || six.innerText != '') {
    return;
  } else if (one.innerText == '') {
    one.innerText = run.value;
  } else if (two.innerText == '') {
    two.innerText = run.value;
  } else if (three.innerText == '') {
    three.innerText = run.value;
  } else if (four.innerText == '') {
    four.innerText = run.value;
  } else if (five.innerText == '') {
    five.innerText = run.value;
  } else if (six.innerText == '') {
    six.innerText = run.value;
  }
  overSum.innerText = +one.innerText + +two.innerText + +three.innerText + +four.innerText + +five.innerText + +six.innerText
  Runs.innerText = +iniRuns + +one.innerText + +two.innerText + +three.innerText + +four.innerText + +five.innerText + +six.innerText
  run.value = '';
  run.focus()
  if (six.innerText != '') {
    Overs.innerText = +Overs.innerText + 1;
    enterBtn.style.display = 'none'
    newOverBtn.style.display = 'inline-block'
    run.disabled = true;
  }
}

newOver = () => {
  iniRuns = Runs.innerText;

  let ul = document.getElementById('ul')
  let li = document.createElement('li')
  li.innerHTML = `Over ${Overs.innerText} = ${thisOver.innerHTML}`;
  ul.appendChild(li);

  one.innerText = '';
  two.innerText = '';
  three.innerText = '';
  four.innerText = '';
  five.innerText = '';
  six.innerText = '';

  overSum.innerText = 0;

  enterBtn.style.display = 'inline-block'
  newOverBtn.style.display = 'none'
  run.disabled = false;
  run.focus()
}
overSum.style.backgroundColor = 'tomato';
overSum.style.color = 'white';
