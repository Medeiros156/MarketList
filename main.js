var mockData = ["banana", "ovos", "carne", "pao"];
var button = document.getElementById("button");

var listSpeech = [];
var ls = localStorage;
var box = document.querySelector(".listBox");

/* -------------------------------------------------------------- */

async function update() {
  console.log("update");
  // ls.clear("ListItems")
  let getd = await getData();
  refreshList(getd);
}

/* -------------------------------------------------------------- */

function fakeData() {
  addToList(prepositionsLogic(mockData));
}

/* -------------------------------------------------------------- */

async function refreshList(dbData) {
  dbData.forEach(async function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);

    var url = await getDataImg(str);
    if (url == undefined) {
      url =
        "https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png";
    }
    box.innerHTML += `
    <div 
      onclick="deleteSelf(this)" 
      class=item> 
      <img src= '${url}' width='150px' height='150px'/>
      <h3 id="listItem" class="listItemTitle">${str}`;
  });
}

async function addToList(speech) {
  speech.forEach(async function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);
    let url = await getDataImg(str);

    if (url == undefined) {
      url =
        "https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png";
    }

    box.innerHTML += `
    <div 
      onclick="deleteSelf(this)" 
      class=item> 
      <img src= '${url}' width='150px' height='150px'/>
      <h3 id="listItem" class="listItemTitle">${str}`;
  });

  listSpeech = [...listSpeech, ...speech];
  ls.setItem("ListItems", JSON.stringify(listSpeech));
  setData(listSpeech);
  console.log(listSpeech);
}

function deleteSelf(el) {
  console.log(el);

  var listLs = ls.getItem("ListItems");

  var item = el.childNodes[3].innerHTML.toLowerCase();
  var parseList = JSON.parse(listLs);

  removeItem(item);

  console.log(item);
  console.log(parseList);
  parseList.forEach(function (e, i) {
    console.log(e);
    if (e == item) {
      console.log(item);
      parseList.splice(i, 1);
    }
  });
  ls.removeItem("ListItems");
  ls.setItem("ListItems", JSON.stringify(parseList));

  console.log(parseList);
  listSpeech = parseList;
  el.remove();
}

/* -------------------------------------------------------------- */
function firstCapital(str) {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  console.log(str2);
}

function prepositionsLogic(listOfData) {
  console.log(listOfData);
  console.log("prepositionsLogic");
  listOfData.map((e, i) => {
    if (e == "de" || e == "da" || e == "sem") {
      let newItemOfList =
        listOfData[i - 1] + " " + listOfData[i] + " " + listOfData[i + 1];
      console.log(newItemOfList);
      listOfData.splice(i - 1, 3);
      listOfData.push(newItemOfList);
    }
  });
  console.log(listOfData);
  return listOfData;
}

const checkbox = document.querySelector(".switch-button-checkbox");
if (localStorage.getItem("type") === "2") {
  checkbox.checked = true;
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    type = 2;
    localStorage.setItem("type", type);
    console.log(type);
  } else {
    type = 1;
    localStorage.setItem("type", type);
    console.log(type);
  }
});
