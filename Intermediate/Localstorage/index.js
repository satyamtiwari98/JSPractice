console.log("Index.js");

const localData = document.getElementById("localData");
const save = document.getElementById("save");
const clear = document.querySelector("#clear");

function onLoadingData() {
  //   localData.innerHTML = "Value =" + localStorage.getItem("data");
  localData.value = localStorage.getItem("data");

  console.log("OnLoadCall");
}

function setLocalStorage() {
  localStorage.setItem("data", localData.value);
  console.log("Data Set In Storage");
}

function clearData() {
  localStorage.clear();
  console.log("Storage Cleared");
}

save.addEventListener("click", setLocalStorage);
clear.addEventListener("click", clearData);
