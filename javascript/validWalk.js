// Walk should be 10 directions & return you to the starting point.

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let posX = 0;
  let posY = 0;
  
  for (const block of walk) {
    if (block === 'n') {
      posY++;
    }
    if (block === 's') {
      posY--;
    }
    if (block === 'w') {
      posX--;
    }
    if (block === 'e') {
      posX++;
    }
  }
  return posY === 0 && posX === 0;
}
