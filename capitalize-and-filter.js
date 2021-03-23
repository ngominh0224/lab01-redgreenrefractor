const capitalizeAndFilter = (strings) => {
  const uppercase = strings.map(string => string.toUpperCase());
  const filtered = uppercase.filter(string => string[0] !== 'F');
  return filtered;
};

module.exports = capitalizeAndFilter;
