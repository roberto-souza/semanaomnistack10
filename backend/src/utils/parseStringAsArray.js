module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString
    ? arrayAsString.split(",").map(string => string.trim())
    : [];
};
