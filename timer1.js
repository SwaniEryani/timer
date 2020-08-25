
let input = process.argv.slice(2);

if (input.length !== 0) {
  const temp = [];
  for (const e of input) {
    if (e > 0) {
      temp.push(e);
    }
  }
  temp.sort((a, b) => a - b);
  for (const sec of temp) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sec * 1000);
  }
}
