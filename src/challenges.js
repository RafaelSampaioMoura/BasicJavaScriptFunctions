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
      repetitions += 1;
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
function encode(string) {
  // seu código aqui
  let stringArray = string.split("");
  for(let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === "a") {
    stringArray[i] = "1";
    } else if(stringArray[i] === "e") {
      stringArray[i] = "2";
    } else if(stringArray[i] === "i") {
      stringArray[i] = "3";
    } else if(stringArray[i] === "o") {
      stringArray[i] = "4";
    } else if(stringArray[i] === "u") {
      stringArray[i] = "5";
    }
  }

  string = stringArray.join("");
  return string;
}

function decode(string) {
  // seu código aqui
  let stringArray = string.split("");
  for(let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === "1") {
    stringArray[i] = "a";
    } else if(stringArray[i] === "2") {
      stringArray[i] = "e";
    } else if(stringArray[i] === "3") {
      stringArray[i] = "i";
    } else if(stringArray[i] === "4") {
      stringArray[i] = "o";
    } else if(stringArray[i] === "5") {
      stringArray[i] = "u";
    }
  }

  string = stringArray.join("");
  return string;
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
