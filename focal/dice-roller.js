const args = process.argv.slice(2);

const rollDice = function (num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    const randomNum = Math.floor(Math.random() * (5) + 1);
    result.push(randomNum)
  }
  
  console.log(`Rolled ${num} dice: ${result}`)
}

rollDice(args)
