const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

const NUMBER_OF_DECIMALS = 2;

function handlesubmit(e) {
  e.prevetDefault();
  const r = Number(radius.value);
  if (Number.isNaN(r)) return;
  const v = (4 / 3) * Math.PI * r ** 3;
  volume.value = v.toFixed(NUMBER_OF_DECIMALS);
}
