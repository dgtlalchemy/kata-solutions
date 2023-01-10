// Remove values from list a which are present in list b, keeping their order. 

// for-of method 0.144ms, filter 0.099ms

function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}
