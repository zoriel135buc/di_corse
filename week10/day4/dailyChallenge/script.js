function submitForm() {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  const formData = {
    name: name,
    lastName: lastName,
  };

  const jsonString = JSON.stringify(formData, null, 2);

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<pre>" + jsonString + "</pre>";
}
