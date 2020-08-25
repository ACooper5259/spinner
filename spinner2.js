const spinner = "|\\-/|//-/";
let delay = 0;
for (let char of spinner) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay);
}
