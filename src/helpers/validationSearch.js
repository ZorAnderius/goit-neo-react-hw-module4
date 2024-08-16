const isValidValue = data => {
  return data && data.length > 2 ? data : '';
};

export default isValidValue;
