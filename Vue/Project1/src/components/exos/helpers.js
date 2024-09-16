function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function replaceAt(index, str, replacement) {
  return (
    str.substring(0, index) +
    replacement +
    str.substring(index + replacement.length)
  );
}

export { random, replaceAt };
