function getElementWidth(content, padding, border) {
  // Calling numbers out of strings
  const valueContent = parseFloat(content);
  const valuePadding = parseFloat(padding);
  const valueBorder = parseFloat(border);

  //Total of the width = content + 2*padding + 2*border
  const totalWidth = valueContent + valuePadding * 2 + valueBorder * 2;
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
