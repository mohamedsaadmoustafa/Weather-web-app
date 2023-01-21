module.exports = function (word) {
  const tokens = word.split(" ");
  //loop through each element of the array and capitalize the first letter.
  for (var i = 0; i < tokens.length; i++) {
    tokens[i] = tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
  }
  return tokens.join(" ");
}