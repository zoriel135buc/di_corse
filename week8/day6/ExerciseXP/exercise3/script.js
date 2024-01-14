(function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
  let p = document.getElementById("par1");
  p.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
})(3, "meirav", "developer", "almog");
