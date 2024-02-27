let keyValueMap = {};

function storeKeyValue() {
  let keyInput = document.getElementById("keyInput").value.trim();
  let valueInput = document.getElementById("valueInput").value.trim();

  if (keyInput !== "" && valueInput !== "") {
    keyValueMap[keyInput] = valueInput;
    document.getElementById("keyInput").value = "";
    document.getElementById("valueInput").value = "";
  }
}

function printTable() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  for (let key in keyValueMap) {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = keyValueMap[key];
  }
}

function clearTable() {
  keyValueMap = {};
  printTable();
}

document.getElementById("keyInput").addEventListener("input", lookupValue);

function lookupValue() {
  let keyInput = document.getElementById("keyInput").value.trim();
  let valueInput = document.getElementById("valueInput");

  if (keyValueMap.hasOwnProperty(keyInput)) {
    valueInput.value = keyValueMap[keyInput];
  } else {
    valueInput.value = "";
  }
}

