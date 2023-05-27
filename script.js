// Get DOM elements
const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const alphaInput = document.getElementById("alpha");
const convertBtn = document.getElementById("convertBtn");
const hexOutput = document.getElementById("hex");

// Convert RGBA to Hex
function rgbaToHex(red, green, blue, alpha) {
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
}

// Convert button click event
convertBtn.addEventListener("click", () => {
  const red = parseInt(redInput.value);
  const green = parseInt(greenInput.value);
  const blue = parseInt(blueInput.value);
  const alpha = parseFloat(alphaInput.value);

  if (isNaN(red) || isNaN(green) || isNaN(blue) || isNaN(alpha)) {
    alert("Please enter valid values.");
    return;
  }

  if (
    red < 0 ||
    red > 255 ||
    green < 0 ||
    green > 255 ||
    blue < 0 ||
    blue > 255 ||
    alpha < 0 ||
    alpha > 1
  ) {
    alert("Please enter values within the valid range.");
    return;
  }

  const hex = rgbaToHex(red, green, blue, alpha);
  hexOutput.value = hex;
});
