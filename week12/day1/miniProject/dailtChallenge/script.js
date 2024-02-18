fetchCurrencies();

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch");

document.getElementById("input").addEventListener("keyup", handleClick);
fromSelect.addEventListener("change", handleClick);
toSelect.addEventListener("change", handleClick);
switchButton.addEventListener("click", switchCurrencies);

function switchCurrencies() {
  const fromValue = fromSelect.value;
  const toValue = toSelect.value;
  fromSelect.value = toValue;
  toSelect.value = fromValue;
  handleClick();
}

function fetchCurrencies() {
  const url =
    "https://v6.exchangerate-api.com/v6/914f84bd53b9e2c6ac17f04b/codes";
  fetch(url)
    .then((res) => res.json())
    .then((res) => populateDropDown(res.supported_codes))
    .catch((error) => console.error(error));
}

function populateDropDown(rates) {
  const entries = Object.entries(rates);

  for (const entry of entries) {
    const [index, [code, name]] = entry;
    const option = document.createElement("option");
    const option2 = document.createElement("option");
    option.innerText = code + ", " + name;
    option2.innerText = code + ", " + name;
    option.value = code;
    option2.value = code;
    fromSelect.appendChild(option);
    toSelect.appendChild(option2);
  }
}
async function handleClick() {
  console.log(fromSelect.value);
  console.log(toSelect.value);
  const curr1 = fromSelect.value;
  const curr2 = toSelect.value;
  const input = document.getElementById("input");
  const summary = document.getElementById("summary");
  const url = `https://v6.exchangerate-api.com/v6/914f84bd53b9e2c6ac17f04b/pair/${curr1}/${curr2}`;
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    const rate = resJson.conversion_rate;
    const amount = Number(input.value);
    const total = amount * rate;
    summary.innerText = `${amount} ${curr1}=${total} ${curr2}`;
    console.log("total", total);
    console.log(resJson);
  } catch (error) {
    console.error(error);
  }
}
