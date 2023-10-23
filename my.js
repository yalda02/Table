const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const row = event.target.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");
    const formData = new FormData();

    for (let i = 0; i < cells.length - 1; i++) {
      const cell = cells[i];
      const header = document.getElementsByTagName("th")[i].innerText;
      const value = cell.innerText;
      formData.append(header, value);
    }

    fetch("URL", {
      method: "POST",
      body: formData,
    })
      .then((response) => {})
      .catch((error) => {});
  });
});

function sendRequest(button) {
  const row = button.parentNode.parentNode;
  const company = row.cells[0].innerText;
  const contact = row.cells[1].innerText;
  const country = row.cells[2].innerText;
  const code = row.cells[3].innerText;

  const queryParams = new URLSearchParams();
  queryParams.append("company", company);
  queryParams.append("contact", contact);
  queryParams.append("country", country);
  queryParams.append("code", code);

  const url = `URL?${queryParams.toString()}`;
  fetch(url)
    .then((response) => {})
    .catch((error) => {});
}
function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
