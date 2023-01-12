function checkWord(str) {
  return /^[a-zA-Z]+$/.test(str);
}

module.exports = {
  checkWord,
};
