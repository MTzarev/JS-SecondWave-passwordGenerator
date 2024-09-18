function passwordGenerator(input) {
  let first = input.shift().toLowerCase();
  let second = input.shift().toLowerCase();
  let secret = input.shift().toUpperCase();
  let total = first.concat(second);
  //let letter = ""
  for (let i = 0; i < total.length; i++) {
    let letter = total[i];
    let counter = 0;
    let nums = secret.length;
    let toReplace = "";
    let replacer = ""
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "y"
    ) {
      let idx = total.indexOf(letter);
      toReplace = total[idx];
      for (let j = 0; j < secret.length; j++) {
        replacer = secret[j];
        total = total.replace(toReplace, replacer);
      }
    }
  }
  total = total.split(``).reverse().join(``);
  console.log(total);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
