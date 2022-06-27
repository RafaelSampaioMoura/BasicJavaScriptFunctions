// Desafio 11
function generatePhoneNumber(numberArray) {
  // seu código aqui
  if (numberArray.length > 11 || numberArray.length < 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let i = 0; i < numberArray.length; i++) {
    let repetitions = 0;
    for (let j = i; j < numberArray.length; j++) {
      if (numberArray[i] === numberArray[j]) {
        repetitions++;
      }
    }

    if (repetitions >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  numberArray.splice(0, 0, '(');
  numberArray.splice(3, 0, ')');
  numberArray.splice(4, 0, ' ');
  numberArray.splice(10, 0, '-');
  return numberArray.join("");
  //numberArray.splice()
}

let numbers = [9, 9, 9, 1, 2, 3, 4, 5, 6, 7, 8];

// numbers.splice(0, 0, "(");
// numbers.splice(3, 0, ")");
// numbers.splice(4, 0, " ");
// numbers.splice(10, 0, "-");
// console.log(numbers.join(""));
// generatePhoneNumber(numbers);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  const smallerThan = (lineA + lineB) > lineC && (lineA + lineC) > lineB && (lineB + lineC) > lineA;
  const biggerThan = Math.abs(lineA - lineB) < lineC && Math.abs(lineA - lineC) < lineB && Math.abs(lineB - lineC) < lineA;

  return smallerThan && biggerThan;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
