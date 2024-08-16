const isEqual = (first, second) => {
  return first.toLowerCase().localeCompare(second.toLowerCase()) === 0;
};

export default isEqual;
