// Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a Leap Year! 🎉`;
  }
  return `${year} is not a Leap Year.`;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
