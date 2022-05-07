function MathChallenge(num) {
  const intengers = new Array(num).fill(1);
  const result = intengers.reduce((acc, _, index) => acc + index + 1, 0);
  return result;
}

// keep this function call here
console.log(MathChallenge(readline()));
