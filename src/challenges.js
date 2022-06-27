// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, area) {
  // seu código aqui
  return (base * area) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  const fraseUm = stringArray[0];
  const fraseDois = stringArray[stringArray.length - 1];
  const fraseFundida = fraseDois.concat(', ', fraseUm);
  return fraseFundida;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  let biggest = numberArray[0];
  for (let number of numberArray) {
    if (number > biggest) {
      biggest = number;
    }
  }

  let repetitions = 0;

  for (let number of numberArray) {
    if (number === biggest) {
      repetitions++;
    }
  }

  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const cat1W = Math.abs(mouse - cat1) < Math.abs(mouse - cat2);
  const cat2W = Math.abs(mouse - cat1) > Math.abs(mouse - cat2);
  if (cat1W) {
    return 'cat1';
  } else if (cat2W) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let returnArray = [];
  for (let number of numberArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      returnArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      returnArray.push('fizz');
    } else if (number % 5 === 0) {
      returnArray.push('buzz');
    } else {
      returnArray.push('bug!');
    }
  }
  return returnArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
