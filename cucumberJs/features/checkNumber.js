function checkNumber(str) {
  return /^\d+$/.test(str);
}

module.exports = {
  checkNumber,
};
